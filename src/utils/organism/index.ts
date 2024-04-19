import AfterList from "@/data/organism/after.json";
import NameList from "@/data/organism/name.json";
import ColorList from "@/data/public/color.json";
import { OrganismParamsType, ReturnOrganismType } from "@/type/organism";
import { getFixedList, getRandomList } from "../tool";

/**
 * 获取生物
 * @param option
 * @returns
 */
export const getRandomOrganism = (
  option: OrganismParamsType
): ReturnOrganismType[] => {
  const { num, beforeWord, nameLength, afterWord } = option;
  //   初始化数据
  const defaultNum = num ? num : 10; // 默认数量
  const defaultNameLength = nameLength ? nameLength : 0;

  const colorList = beforeWord
    ? getFixedList(defaultNum, beforeWord)
    : getRandomList(defaultNum, ColorList);

  const afterWordList = afterWord
    ? getFixedList(defaultNum, afterWord)
    : getRandomList(defaultNum, AfterList);

  const nameList = getRandomList(defaultNum, NameList, defaultNameLength);
  const returnList: ReturnOrganismType[] = [];
  for (let i = 0; i < defaultNum; i++) {
    const { name: colorName } = colorList[i];
    const { name: afterWord } = afterWordList[i];
    const { name } = nameList[i];
    returnList.push({
      id: i + 1,
      name,
      color: colorName,
      afterWord: afterWord,
      fullName: `${colorName}${name}${afterWord}`,
    });
  }

  return returnList;
};
