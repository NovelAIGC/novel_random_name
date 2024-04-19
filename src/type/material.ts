import { RandomNameType } from "./index";

export interface MaterialParamsType {
  num: number;
  afterWord?: string;
  nameLength?: number;
  isOrganism?: boolean;
}

export interface ReturnMaterialType extends RandomNameType {
  fullName: string;
  afterWord: string;
  organismName: string;
}

export interface ReturnMaterialClassType extends RandomNameType {
  class: string;
}
