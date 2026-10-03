export class DomainError extends Error{readonly code:string;constructor(code:string,message:string){super(message);this.name="DomainError";this.code=code}}
export class ValidationError extends Error{readonly code="VALIDATION_ERROR";constructor(message:string){super(message);this.name="ValidationError"}}
export class AuthorizationError extends Error{readonly code="AUTHORIZATION_DENIED";constructor(message="Authorization denied."){super(message);this.name="AuthorizationError"}}
export class InfrastructureError extends Error{readonly code="INFRASTRUCTURE_ERROR";constructor(message:string){super(message);this.name="InfrastructureError"}}
