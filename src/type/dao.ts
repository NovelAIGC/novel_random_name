import { DaoNamePositionEnum, GenderEnum } from "@/enum";
import { RandomNameType } from "./index";

export interface DaoParamsType {
  num: number;
  gender?: GenderEnum;
  nameLength?: number;
  beforeWord?: string;
  afterWord?: string;
  daoNamePosition: DaoNamePositionEnum;
}

export interface ReturnDaoType extends RandomNameType {
  fullName: string;
  beforeWord: string;
  afterWord: string;
}

export interface ReturnDaoClassType extends RandomNameType {
  class: string;
}
