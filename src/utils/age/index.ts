import { Lunar } from "lunar-typescript";

export function getAge() {
  const d = Lunar.fromYmdHms(1, 4, 21, 23, 12, 1);
  console.log(d.toFullString());
  console.log(d.toString());
  console.log(d.getTimeZhi());
  console.log(d.getYearInGanZhi());
  return "未实现";
}
