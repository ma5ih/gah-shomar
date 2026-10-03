import {ValidationError} from "../shared/errors";

export type RuntimeEnvironment="development"|"test"|"production";

export type RuntimeConfig={
  nodeEnv:RuntimeEnvironment;
  appUrl:string;
  appTimezone:string;
  databaseUrl?:string;
};

type EnvironmentLike=Record<string,string|undefined>;

function readNodeEnv(env:EnvironmentLike):RuntimeEnvironment{
  const value=(env.NODE_ENV??"development").trim();
  if(value==="development"||value==="test"||value==="production")return value;
  throw new ValidationError("NODE_ENV must be development, test, or production.");
}

function readAppUrl(env:EnvironmentLike,nodeEnv:RuntimeEnvironment):string{
  const raw=(env.APP_URL??(nodeEnv==="production"?"":"http://localhost:3000")).trim();
  if(!raw)throw new ValidationError("APP_URL is required in production.");
  let url:URL;
  try{url=new URL(raw)}catch{throw new ValidationError("APP_URL must be a valid absolute URL.");}
  if(!["http:","https:"].includes(url.protocol))throw new ValidationError("APP_URL must use http or https.");
  return url.toString().replace(//$/,"");
}

function readTimezone(env:EnvironmentLike):string{
  const timezone=(env.APP_TIMEZONE??"Asia/Tehran").trim();
  if(!timezone)throw new ValidationError("APP_TIMEZONE cannot be empty.");
  try{new Intl.DateTimeFormat("en-US",{timeZone:timezone}).format();}catch{throw new ValidationError("APP_TIMEZONE must be a valid IANA timezone.");}
  return timezone;
}

function readDatabaseUrl(env:EnvironmentLike,required:boolean):string|undefined{
  const value=env.DATABASE_URL?.trim();
  if(!value){
    if(required)throw new ValidationError("DATABASE_URL is required for database-backed use cases.");
    return undefined;
  }
  try{
    const url=new URL(value);
    if(!["postgres:","postgresql:"].includes(url.protocol))throw new Error();
  }catch{
    throw new ValidationError("DATABASE_URL must be a valid PostgreSQL URL.");
  }
  return value;
}

export function getRuntimeConfig(options:{env?:EnvironmentLike;requireDatabase?:boolean}={}):RuntimeConfig{
  const env=options.env??process.env;
  const nodeEnv=readNodeEnv(env);
  return{
    nodeEnv,
    appUrl:readAppUrl(env,nodeEnv),
    appTimezone:readTimezone(env),
    databaseUrl:readDatabaseUrl(env,Boolean(options.requireDatabase)),
  };
}

export function getProductionConfig(env:EnvironmentLike=process.env):RuntimeConfig{
  const config=getRuntimeConfig({env,requireDatabase:true});
  if(config.nodeEnv!=="production")throw new ValidationError("Production configuration requires NODE_ENV=production.");
  return config;
}
