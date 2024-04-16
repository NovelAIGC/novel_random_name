import { GenderEnum } from "@/enum";
import { GenderInfoType } from "@/type";
import { RandomNameType } from "@/type";

// 获取随机姓数组
export function getRandomList(
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
      loopNum = randomValue < 0.5 ? 1 : 2;
    }
    // 随机 loopNum 个名字并连
    for (let j = 0; j < loopNum; j++) {
      const randomIndex = Math.floor(Math.random() * list.length);
      name += list[randomIndex].name;
    }
    returnList.push({
      id: i + 1,
      name,
    });
  }
  return returnList;
}

// 获取固定姓数组
export function getFixedList(num: number, name: string): RandomNameType[] {
  const list = Array.from({ length: num }, (_, index) => ({
    id: index + 1,
    name,
  }));
  return list;
}

// 获取性别的数量
export function getGenderInfo(
  defaultGender: GenderEnum,
  defaultNum: number
): GenderInfoType {
  // 获取性别数量
  let femaleNum = defaultGender === GenderEnum.FEMALE ? defaultNum : 0;
  let maleNum = defaultGender === GenderEnum.MALE ? defaultNum : 0;
  //  随机
  if (defaultGender === GenderEnum.ALL) {
    femaleNum = Math.floor(Math.random() * defaultNum);
    maleNum = defaultNum - femaleNum;
  }
  return { femaleNum, maleNum };
}

// 通过字段去重
export function uniqueByName(arr: any[], name: string): any {
  // 使用一个对象来存储已经出现过的 name
  const seen: Record<string, boolean> = {};

  // 使用 reduce 方法对数组进行遍历，并利用对象进行去重
  const newArr: any = arr.reduce((uniqueArray, currentItem) => {
    // 如果当前项的 name 在对象中不存在，则将它加入结果数组，并在对象中记录该 name
    if (!seen[currentItem[name]]) {
      seen[currentItem[name]] = true;
      uniqueArray.push(currentItem);
    }
    return uniqueArray;
  }, []);
  newArr.map((item: any, index: number) => {
    item.id = index + 1;
  });

  return newArr;
}

// const loopObjList = [];

// 获取随机功法数组
export function getRandomGongFaList(
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
