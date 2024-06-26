import FamilyList from "@/data/name/family.json";
import FemaleList from "@/data/name/female.json";
import MaleList from "@/data/name/male.json";
import MiddleList from "@/data/name/middle.json";
import { AgeRangeEnum, GenderEnum } from "@/enum";
import { NameParamsType, ReturnNameType } from "@/type/name";
import { getFixedList, getGenderInfo, getRandomList } from "../tool";
import { RandomNameType } from "@/type";
import { getRandomAge } from "@/utils/age";

/**
 * 获取随机名字
 * @param family 姓
 * @param num 数量
 * @param gender 性别
 * @param word 字辈
 * @param nameLength 名字长度
 * @param isWord 是否有字
 * @returns RandomNameType[]
 */
export const getRandomName = (option: NameParamsType): ReturnNameType[] => {
  const { num, family, gender, word, nameLength, isWord, ageInfo } = option;
  //   初始化数据
  const defaultNum = num ? num : 10;
  const defaultFamily = family ? family : "";
  const defaultGender = gender ? gender : GenderEnum.ALL;
  const defaultWord = word ? word : "";
  const defaultIsWord = !!isWord;
  const defaultNameLength = nameLength ? nameLength : 0;

  // 定义年龄数组
  const ageList = []; 
  if (ageInfo && ageInfo.disable) {
    for (let i = 0; i < defaultNum; i++) {
      const minAge = ageInfo?.min ? ageInfo?.min : AgeRangeEnum.MIN;
      const maxAge = ageInfo?.max ? ageInfo?.max : AgeRangeEnum.MAX;
      ageList.push(getRandomAge(minAge, maxAge));
    }
  } 
  // 定义姓数组
  const familyList: RandomNameType[] =
    defaultFamily === ""
      ? getRandomList(defaultNum, FamilyList)
      : getFixedList(defaultNum, defaultFamily);
  // 获取性别信息
  const { femaleNum, maleNum } = getGenderInfo(defaultGender, defaultNum);

  // 组装字号
  const wordSizeList = getRandomList(defaultNum, MiddleList);
  wordSizeList.map((item, index) => {
    if (defaultNum - index <= femaleNum) {
      const randomIndex = Math.floor(Math.random() * FemaleList.length);
      item.name += FemaleList[randomIndex].name;
    } else {
      const randomIndex = Math.floor(Math.random() * MaleList.length);
      item.name += MaleList[randomIndex].name;
    }
  });
  // 获取女性的名字
  const femaleList = getRandomList(femaleNum, FemaleList, defaultNameLength);
  femaleList.map((item) => {
    item.gender = GenderEnum.FEMALE;
  });
  // 获取男性的名字
  const maleList = getRandomList(maleNum, MaleList, defaultNameLength);
  maleList.map((item) => {
    item.gender = GenderEnum.MALE;
  });
  const nameList = [...femaleList, ...maleList];

  const returnList: ReturnNameType[] = []; 

  for (let index = 0; index < defaultNum; index++) {
    const { name: familyName } = familyList[index]; // 获取姓
    const { name, gender } = nameList[index]; // 获取名字
    const { name: wordSizeName } = wordSizeList[index]; // 获取字号
    const ageInfo = ageList[index];

    const data: ReturnNameType = {
      id: index + 1,
      name,
      family: familyName,
      fullName: `${familyName}${name}`,
      wordSize: "",
      word: "",
      gender,
      ageInfo: null,
    };
    if (defaultWord) {
      data.word = defaultWord;
      data.fullName = `${familyName}${defaultWord}${name}`;
    }
    if (defaultIsWord) {
      data.wordSize = wordSizeName;
    } 
    if (ageInfo) {
      data.ageInfo = ageInfo;
    }
    returnList.push(data);
  }
  return returnList;
};
