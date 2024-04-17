import { GenderEnum } from "@/enum";
import { RandomNameType } from "./index";



export interface NameParamsType {
  num: number;
  family?: string;
  gender?: GenderEnum;
  word?: string;
  nameLength?: number;
  isWord?: boolean;
}

export interface ReturnNameType extends RandomNameType { 
  family: string;
  fullName: string;
  word: string;
  wordSize: string;
}
