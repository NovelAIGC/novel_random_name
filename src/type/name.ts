import { GenderEnum } from "@/enum";
import { RandomNameType } from "./index";
import { ReturnAgeType } from "./age";

export interface NameParamsType {
  num: number;
  family?: string;
  gender?: GenderEnum;
  word?: string;
  nameLength?: number;
  isWord?: boolean;
  ageInfo?: {
    disable: boolean;
    min?: number;
    max?: number;
  };
}

export interface ReturnNameType extends RandomNameType {
  family: string;
  fullName: string;
  word: string;
  wordSize: string;
  ageInfo: ReturnAgeType | null;
}
