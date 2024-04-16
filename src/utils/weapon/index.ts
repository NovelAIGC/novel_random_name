import NameList from "@/data/organism/name.json";
import WeaponAfterList from "@/data/weapon/after.json";
import { getFixedList, getRandomDynamicList, getRandomList } from "../tool";
import { ReturnWeaponType, WeaponParamsType } from "@/type/weapon";

/**
 * 获取武器
 * @param option
 * @returns
 */
export const getWeapon = (option: WeaponParamsType): ReturnWeaponType[] => {
  const { num, afterWord, nameLength } = option;
  // 初始化数据
  const defaultNum = num ? num : 10;
  const defaultNameLength = nameLength ? nameLength : 0;

  const afterWordList = afterWord
    ? getFixedList(defaultNum, afterWord)
    : getRandomList(defaultNum, WeaponAfterList);

  const returnList: ReturnWeaponType[] = [];

  const nameList = getRandomDynamicList(
    defaultNum,
    NameList,
    defaultNameLength
  );
  for (let i = 0; i < defaultNum; i++) {
    const { name: afterWord } = afterWordList[i];
    const { name } = nameList[i];
    returnList.push({
      id: i + 1,
      name,
      afterWord,
      fullName: `${name}${afterWord}`,
    });
  }

  return returnList;
};
