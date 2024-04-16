import { RandomNameType } from "./index";

export interface WeaponParamsType {
  num: number;
  afterWord?: string;
  nameLength?: number;
}

export interface ReturnWeaponType extends RandomNameType {
  fullName: string;
  afterWord: string;
//   color: string;
}

export interface ReturnWeaponClassType extends RandomNameType {
  class: string;
}
