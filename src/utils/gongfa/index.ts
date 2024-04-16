import GongFaNameList from "@/data/public/name.json";
import GongFaClassList from "@/data/gongfa/class.json";
import { GongfaParamsType, ReturnGongfaType } from "@/type/gongfa";
import { getFixedList, getRandomList } from "../tool";
import { RandomNameType } from "@/type";

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

// 获取随机功法数组
function getRandomGongFaList(
  num: number,
  list: RandomNameType[],
  wordLength: number = 1
): RandomNameType[] {
  const returnList: RandomNameType[] = [];
  for (let i = 0; i < num; i++) {
    let name = "";
    let loopNum = !wordLength ? 0 : wordLength;
    // 当不固定字数时  随机返回1~2字数`
    if (loopNum === 0) {
      const randomValue = Math.random();
      if (randomValue < 0.3) {
        loopNum = 1;
      } else if (randomValue < 0.6) {
        loopNum = 2;
      } else if (randomValue < 1) {
        loopNum = 3;
      }
    }
    // 随机 loopNum 个名字并连
    const oList = JSON.parse(JSON.stringify(list));
    for (let j = 0; j < loopNum; j++) {
      const randomIndex = Math.floor(Math.random() * oList.length);
      name += list[randomIndex].name;
      oList.filter((item: any) => item.class === oList[randomIndex].class);
    }
    returnList.push({
      id: i + 1,
      name,
    });
  }
  return returnList;
}
