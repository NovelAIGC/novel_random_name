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
export const getOrganism = (
  option: OrganismParamsType
): ReturnOrganismType[] => {
  const { num, color, afterWord } = option;
  //   初始化数据
  const defaultNum = num ? num : 10; // 默认数量

  const colorList = color
    ? getFixedList(defaultNum, color)
    : getRandomList(defaultNum, ColorList);

  const afterWordList = afterWord
    ? getFixedList(defaultNum, afterWord)
    : getRandomList(defaultNum, AfterList);
  
  

  const nameList = getRandomList(defaultNum, NameList);
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
