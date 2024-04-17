import {
  DaoNamePositionEnum,
  DaoClassEnum,
  GenderEnum,
  PublicClassEnum,
  OrganizationClassEnum,
} from "@/enum";
import { getDao, getDaoClass } from "./utils/dao/index";
import { getName } from "@/utils/name";
import { getGongfa } from "@/utils/gongfa";
import { getOrganism } from "@/utils/organism";
import { getMaterial } from "@/utils/material";
import { getWeapon } from "@/utils/weapon";
import { getAddress } from "@/utils/address";
import { getAge } from "@/utils/age";
import type {
  GenderInfoType,
  ReturnInfoType,
  ParamsInfoType,
  RandomNameType,
} from "@/type";

export {
  // 导出方法
  getName,
  getDao,
  getGongfa,
  getDaoClass,
  getOrganism,
  getMaterial,
  getWeapon,
  getAddress,
  getAge,

  // 导出枚举
  GenderEnum,
  DaoClassEnum,
  DaoNamePositionEnum,
  PublicClassEnum,
  OrganizationClassEnum,

  // 导出类型
  ReturnInfoType,
  RandomNameType,
  GenderInfoType,
  ParamsInfoType
};
