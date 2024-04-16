import { GenderEnum } from "@/enum";



export interface NameParamsType {
  num: number;
  family?: string;
  gender?: GenderEnum;
  word?: string;
  nameLength?: number;
  isWord?: boolean;
}

export interface ReturnNameType {
  name: string;
  id: number;
  family: string;
  fullName: string;
  word: string;
  wordSize: string;
}
