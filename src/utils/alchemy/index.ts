import NameList from "@/data/organism/name.json";
import OrganismAfterList from "@/data/organism/after.json";
import { getFixedList, getRandomDynamicList, getRandomList } from "../tool";
import { AlchemyParamsType, ReturnAlchemyType } from "@/type/alchemy";
import AlchemyList from "@/data/alchemy/after.json";

/**
 * 获取丹药
 * @param option
 * @returns
 */
export const getRandomAlchemy = (
  option: AlchemyParamsType
): ReturnAlchemyType[] => {
  const { num, afterWord, nameLength, isOrganism } = option;
  // 初始化数据
  const defaultNum = num ? num : 10;
  const defaultNameLength = nameLength ? nameLength : 0;
  const defaultIsOrganism = !!isOrganism;

  const organismList = defaultIsOrganism
    ? getRandomList(defaultNum, OrganismAfterList)
    : getFixedList(defaultNum, "");

  const afterWordList = afterWord
    ? getFixedList(defaultNum, afterWord)
    : getRandomList(defaultNum, AlchemyList);

  const returnList: ReturnAlchemyType[] = [];

  const nameList = getRandomDynamicList(
    defaultNum,
    NameList,
    defaultNameLength
  );
  for (let i = 0; i < defaultNum; i++) {
    const { name: afterWord } = afterWordList[i];
    const { name } = nameList[i];
    const { name: organismName } = organismList[i];
    returnList.push({
      id: i + 1,
      name,
      afterWord,
      organismName,
      fullName: `${name}${organismName}${afterWord}`,
    });
  }

  return returnList;
};
