import { NameParamsType, ReturnNameType } from "./name";
import { GenderEnum } from "@/enum";
import {
  AddressParamsType,
  ReturnAddressClassType,
  ReturnAddressType,
} from "./addess";
import { OrganismParamsType, ReturnOrganismType } from "./organism";
import { DaoParamsType, ReturnDaoClassType } from "./dao";
import {
  GongfaParamsType,
  ReturnGongfaClassType,
  ReturnGongfaType,
} from "./gongfa";
import {
  MaterialParamsType,
  ReturnMaterialClassType,
  ReturnMaterialType,
} from "./material";
import {
  ReturnWeaponClassType,
  ReturnWeaponType,
  WeaponParamsType,
} from "./weapon";

// 返回性别信息类型
export interface GenderInfoType {
  femaleNum: number;
  maleNum: number;
}

// 返回的随机name 类型
export interface RandomNameType {
  name: string;
  id: number;
  gender?: GenderEnum;
}

export declare type ReturnInfoType =
  | ReturnAddressClassType
  | ReturnAddressType
  | ReturnOrganismType
  | ReturnNameType
  | ReturnDaoClassType
  | ReturnNameType
  | ReturnGongfaClassType
  | ReturnGongfaType
  | ReturnMaterialClassType
  | ReturnMaterialType
  | ReturnWeaponClassType
  | ReturnWeaponType;

export declare type ParamsInfoType =
  | DaoParamsType
  | AddressParamsType
  | OrganismParamsType
  | NameParamsType
  | GongfaParamsType
  | MaterialParamsType
  | WeaponParamsType;
