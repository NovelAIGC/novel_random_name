import MaterialAfterList from "@/data/material/after.json";
import NameList from "@/data/organism/name.json";
import OrganismAfterList from "@/data/organism/after.json";
import { MaterialParamsType, ReturnMaterialType } from "@/type/material";
import { getFixedList, getRandomDynamicList, getRandomList } from "../tool";

/**
 * 获取材料
 * @param option
 * @returns
 */
export const getRandomMaterial = (
  option: MaterialParamsType
): ReturnMaterialType[] => {
  const { num, afterWord, wordLength, isOrganism } = option;
  // 初始化数据
  const defaultNum = num ? num : 10;
  const defaultWordLength = wordLength ? wordLength : 0;
  const defaultIsOrganism = !!isOrganism;

  const organismList = defaultIsOrganism
    ? getRandomList(defaultNum, OrganismAfterList)
    : getFixedList(defaultNum, "");

  const afterWordList = afterWord
    ? getFixedList(defaultNum, afterWord)
    : getRandomList(defaultNum, MaterialAfterList);

  const returnList: ReturnMaterialType[] = [];

  const nameList = getRandomDynamicList(
    defaultNum,
    NameList,
    defaultWordLength
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
