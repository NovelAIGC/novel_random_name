import NameList from "@/data/organization/name.json";
import OrganizationAfterList from "@/data/organization/after.json";
import { getFixedList, getRandomDynamicList, getRandomList } from "../tool";
import { AddressParamsType, ReturnAddressType } from "@/type/addess";
import { OrganizationClassEnum } from "@/enum";

/**
 * 获取地点
 * @param option
 * @returns
 */
export const getAddress = (option: AddressParamsType): ReturnAddressType[] => {
  const { num, afterWord, nameLength, type, isMyth } = option;
  // 初始化数据
  const defaultNum = num ? num : 10;
  const defaultNameLength = nameLength ? nameLength : 0;
  const defaultType = type ? type : null;
  const defaultIsMyth = !!isMyth;

  let newOrganizationAfterList = OrganizationAfterList;
  if (defaultType) {
    newOrganizationAfterList = newOrganizationAfterList.filter(
      (item) => item.class === defaultType
    );
  }
  const afterWordList = afterWord
    ? getFixedList(defaultNum, afterWord)
    : getRandomList(defaultNum, newOrganizationAfterList);

  const returnList: ReturnAddressType[] = [];
  let newNameList = NameList;

  if (!defaultIsMyth) {
    newNameList = newNameList.filter(
      (item) => item.class !== OrganizationClassEnum.MYTH
    );
  } 
  const nameList = getRandomDynamicList(
    defaultNum,
    newNameList,
    defaultNameLength,
    2
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
