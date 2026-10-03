import {publicRepository} from "../data/public/repository";
export function getPersonBySlug(slug:string){return publicRepository.getPersonBySlug(slug)}
export function getPersonById(id:string){return publicRepository.getPersonById(id)}
