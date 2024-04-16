import FamilyList from "@/data/name/family.json";
import FemaleList from "@/data/name/female.json";
import MaleList from "@/data/name/male.json";
import MiddleList from "@/data/name/middle.json";
import { GenderEnum } from "@/enum";
import { NameParamsType, ReturnNameType } from "@/type/name";
import { getFixedList, getGenderInfo, getRandomList } from "../tool";
import { RandomNameType } from "@/type";

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
export const getName = (option: NameParamsType): ReturnNameType[] => {
  const { num, family, gender, word, nameLength, isWord } = option;
  //   初始化数据
  const defaultNum = num ? num : 10;
  const defaultFamily = family ? family : "";
  const defaultGender = gender ? gender : GenderEnum.ALL;
  const defaultWord = word ? word : "";
  const defaultIsWord = !!isWord;
  const defaultNameLength = nameLength ? nameLength : 0;
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
  // 获取男性的名字
  const maleList = getRandomList(maleNum, MaleList, defaultNameLength);
  const nameList = [...femaleList, ...maleList];

  const returnList: ReturnNameType[] = [];

  for (let index = 0; index < defaultNum; index++) {
    const { name: familyName } = familyList[index]; // 获取姓
    const { name } = nameList[index]; // 获取名字
    const { name: wordSizeName } = wordSizeList[index]; // 获取字号
    const data: ReturnNameType = {
      id: index + 1,
      name,
      family: familyName,
      fullName: `${familyName}${name}`,
      wordSize: "",
      word: "",
    };
    if (defaultWord) {
      data.word = defaultWord;
      data.fullName = `${familyName}${defaultWord}${name}`;
    }
    if (defaultIsWord) {
      data.wordSize = wordSizeName;
    }
    returnList.push(data);
  }
  return returnList;
};
