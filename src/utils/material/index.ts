import { GenderEnum } from "@/enum";
import { DaoParamsType, ReturnDaoType } from "@/type/dao";
import DaoList from "@/data/dao/dao.json";

export const getDao = (option: DaoParamsType): ReturnDaoType[] => {
  const { num, gender, nameLength } = option;
  //   初始化数据
  const defaultNum = num ? num : 10;
  const defaultGender = gender ? gender : GenderEnum.ALL;
  const defaultNameLength = nameLength ? nameLength : 0;

  console.log(DaoList);
  const list: any = [];
  DaoList.map((item, index) => {
    const data = {
      id: index + 1,
      name: item,
    };
    list.push(data);
  });
  console.log(JSON.stringify(list));
  console.log(defaultNameLength, defaultNum, defaultGender);
  return [];
};
