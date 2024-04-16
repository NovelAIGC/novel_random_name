import { RandomNameType } from "./index";

export interface MaterialParamsType {
    num: number;
    nameLength?: number;
    afterWord?: string;
  }
  
  export interface ReturnMaterialType extends RandomNameType {
    fullName: string; 
    afterWord: string;
  }
  
  export interface ReturnMaterialClassType extends RandomNameType {
    class: string;
  }
  