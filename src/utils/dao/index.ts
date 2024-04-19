import { DaoClassEnum, DaoNamePositionEnum, GenderEnum } from "@/enum";
import { RandomNameType } from "@/type";
import DaoList from "@/data/dao/dao.json";
import FemaleList from "@/data/dao/female.json";
import MaleList from "@/data/dao/male.json";
import {
  getFixedList,
  getGenderInfo,
  getRandomList,
  uniqueByName,
} from "../tool";
import { DaoParamsType, ReturnDaoClassType, ReturnDaoType } from "@/type/dao";

/**
 * 获取道号
 * @param option: DaoParamsType
 * @returns
 */
export const getRandomDao = (option: DaoParamsType): ReturnDaoType[] => {
  const { num, gender, nameLength, beforeWord, afterWord, daoNamePosition } =
    option;
  //   初始化数据
  const defaultNum = num ? num : 10;
  const defaultGender = gender ? gender : GenderEnum.ALL;
  const defaultNameLength = nameLength ? nameLength : 0;
  const defaultBeforeWord = beforeWord ? beforeWord : "";
  const defaultAfterWord = afterWord ? afterWord : "";
  const defaultDaoNamePosition = daoNamePosition
    ? daoNamePosition
    : DaoNamePositionEnum.AFTER;

  const { femaleNum, maleNum } = getGenderInfo(defaultGender, defaultNum);
  // 获取名
  const daoNameList = getRandomList(defaultNum, DaoList, defaultNameLength);
  // 组装后缀
  let beforeList = [];
  if (defaultBeforeWord) {
    beforeList = getFixedList(defaultNum, defaultBeforeWord);
  } else {
    const beforeFemaleList = getRandomList(femaleNum, FemaleList);
    beforeFemaleList.map((item) => {
      item.gender = GenderEnum.FEMALE;
    });
    const beforeMaleList = getRandomList(maleNum, MaleList);
    beforeMaleList.map((item) => {
      item.gender = GenderEnum.MALE;
    });
    beforeList = [...beforeFemaleList, ...beforeMaleList];
  }

  // 组装前缀
  let afterList: RandomNameType[] = [];
  if (defaultAfterWord) {
    afterList = getFixedList(defaultNum, defaultAfterWord);
  }

  const returnList: ReturnDaoType[] = [];

  for (let index = 0; index < defaultNum; index++) {
    const { name: DaoName } = daoNameList[index]; // 获取姓法号
    const { name: BeforeName, gender } = beforeList[index]; // 获取后缀 
    const data: ReturnDaoType = {
      id: index + 1,
      name: DaoName,
      fullName: `${DaoName}${BeforeName}`,
      beforeWord: BeforeName,
      afterWord: "",
      gender
    };

    if (afterList.length > 0) {
      const { name } = afterList[index]; // 获取前缀
      if (defaultDaoNamePosition === DaoNamePositionEnum.AFTER) {
        data.fullName = `${DaoName}${name}${BeforeName}`;
      }
      if (defaultDaoNamePosition === DaoNamePositionEnum.BEFORE) {
        data.fullName = `${name}${DaoName}${BeforeName}`;
      }
      data.afterWord = name;
    }

    returnList.push(data);
  }
  return returnList;
};

/**
 * 获取道号类型
 * @param option
 * @returns
 */
export function getRandomDaoClass(
  gender: GenderEnum = GenderEnum.ALL,
  filter?: DaoClassEnum
): ReturnDaoClassType[] {
  let returnList: ReturnDaoClassType[] = [];
  if (gender === GenderEnum.ALL) {
    returnList = uniqueByName([...FemaleList, ...MaleList], "name");
  }
  if (gender === GenderEnum.MALE) {
    returnList = [...MaleList];
  }
  if (gender === GenderEnum.FEMALE) {
    returnList = [...FemaleList];
  }
  //  过滤
  if (filter) {
    returnList = returnList.filter((item) => item.class === filter);
  }
  return returnList;
}
