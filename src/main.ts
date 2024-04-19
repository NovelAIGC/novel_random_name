import { getRandomAlchemy } from './utils/alchemy/index';
import {
  DaoNamePositionEnum,
  DaoClassEnum,
  GenderEnum,
  PublicClassEnum,
  OrganizationClassEnum,
} from "@/enum";
import { getRandomDao, getRandomDaoClass } from "./utils/dao/index";
import { getRandomName } from "@/utils/name";
import { getRandomGongfa } from "@/utils/gongfa";
import { getRandomOrganism } from "@/utils/organism";
import { getRandomMaterial } from "@/utils/material";
import { getRandomWeapon } from "@/utils/weapon";
import { getRandomAddress } from "@/utils/address";
import { getRandomAge } from "@/utils/age";
import type {
  GenderInfoType,
  ReturnInfoType,
  ParamsInfoType,
  RandomNameType,
} from "@/type";

export {
  // 导出方法
  getRandomName,
  getRandomDao,
  getRandomDaoClass,
  getRandomGongfa,
  getRandomOrganism,
  getRandomMaterial,
  getRandomWeapon,
  getRandomAddress,
  getRandomAge,
  getRandomAlchemy,

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
  ParamsInfoType,
};
