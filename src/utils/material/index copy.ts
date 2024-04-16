import DaoList from "@/data/dao/dao.json";
import { MaterialParamsType, ReturnMaterialType } from "@/type/material";

export const getMaterial = (
  option: MaterialParamsType
): ReturnMaterialType[] => {
  const { num, nameLength } = option;
  //   初始化数据
  const defaultNum = num ? num : 10;
  const defaultNameLength = nameLength ? nameLength : 0;

  console.log(DaoList);
  const list: any = [];
  DaoList.map((item, index) => {
    const data = {
      id: index + 1,
      name: item,
      class: "",
    };
    list.push(data);
  });
  console.log(JSON.stringify(list));
  console.log(defaultNameLength, defaultNum);
  return [];
};
