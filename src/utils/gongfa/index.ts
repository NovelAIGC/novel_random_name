import GongFaNameList from "@/data/gongfa/name.json";
import GongFaClassList from "@/data/gongfa/class.json";
import { GongfaParamsType, ReturnGongfaType } from "@/type/gongfa";
import { getFixedList, getRandomGongFaList, getRandomList } from "../tool";

export const getGongfa = (option: GongfaParamsType): ReturnGongfaType[] => {
  const { num, nameLength, afterWord } = option;
  //   初始化数据
  const defaultNum = num ? num : 10;
  let defaultNameLength = nameLength ? nameLength : 0;
  if (defaultNameLength > 3) defaultNameLength = 3; // 最大值不能超过三
  const afterWordList = afterWord
    ? getFixedList(defaultNum, afterWord)
    : getRandomList(defaultNum, GongFaClassList);
  const nameList = getRandomGongFaList(
    defaultNum,
    GongFaNameList,
    defaultNameLength
  );
  const returnList: ReturnGongfaType[] = [];
  for (let index = 0; index < defaultNum; index++) {
    const { name: afterWord } = afterWordList[index];
    const { name } = nameList[index];
    const data: ReturnGongfaType = {
      id: index + 1,
      name,
      afterWord,
      fullName: `${name}${afterWord}`,
    };
    returnList.push(data);
  }
  return returnList;
};
