import { RandomNameType } from "./index";

export interface GongfaParamsType {
  num: number;
  nameLength?: number;
  afterWord?: string;
}

export interface ReturnGongfaType extends RandomNameType {
  fullName: string; 
  afterWord: string;
}

export interface ReturnGongfaClassType extends RandomNameType {
  class: string;
}
