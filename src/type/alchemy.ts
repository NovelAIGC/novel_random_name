import { RandomNameType } from "./index";

export interface AlchemyParamsType {
  num: number;
  afterWord?: string; 
  isOrganism?: boolean;
  nameLength?: number;
}

export interface ReturnAlchemyType extends RandomNameType {
  fullName: string;
  afterWord: string;
  organismName: string;
}

export interface ReturnAlchemyClassType extends RandomNameType {
  class: string;
}
