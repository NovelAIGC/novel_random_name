import { AgeRangeEnum } from "@/enum";
import { ReturnAgeType } from "@/type/age";

// 生成随机年龄的函数
export function getRandomAge(
  minYear: number = AgeRangeEnum.MIN,
  maxYear: number = AgeRangeEnum.MAX
): ReturnAgeType { 
  const randomYear = +Math.floor(
    Math.random() * (maxYear - minYear + 1) + minYear
  );
  const randomMonth = Math.floor(Math.random() * 12) + 1; // 1 到 12 之间的随机月份
  const randomDay = Math.floor(Math.random() * 28) + 1; // 1 到 28 之间的随机日期（假设每个月都是 28 天）
  const randomHour = Math.floor(Math.random() * 24); // 0 到 23 之间的随机小时
  const randomMinute = Math.floor(Math.random() * 60); // 0 到 59 之间的随机分钟
  const randomSecond = Math.floor(Math.random() * 60); // 0 到 59 之间的随机秒数
  return {
    date: `${randomYear}-${randomMonth<10?`0${randomMonth}`:randomMonth}-${randomDay<10?`0${randomDay}`:randomDay} ${randomHour<10?`0${randomHour}`:randomHour}:${randomMinute<10?`0${randomMinute}`:randomMinute}:${randomSecond<10?`0${randomSecond}`:randomSecond}`,
    year: randomYear,
    month: randomMonth,
    day: randomDay,
    hour: randomHour,
    minute: randomMinute,
    second: randomSecond,
  };
}
