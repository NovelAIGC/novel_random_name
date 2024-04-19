import { RandomNameType } from "./index";

export interface OrganismParamsType {
  num: number;
  afterWord?: string;
  beforeWord?: string;
  nameLength?: number;
}

export interface ReturnOrganismType extends RandomNameType {
  fullName: string;
  afterWord: string;
  color: string;
}

export interface ReturnOrganismClassType extends RandomNameType {
  class: string;
}
