import { OrganizationClassEnum } from "@/enum";
import { RandomNameType } from "./index";

export interface AddressParamsType {
  num: number;
  afterWord?: string;
  nameLength?: number;
  type?: OrganizationClassEnum | null;
  isMyth?: boolean;
}

export interface ReturnAddressType extends RandomNameType {
  fullName: string;
  afterWord: string;
  //   color: string;
}

export interface ReturnAddressClassType extends RandomNameType {
  class: string;
}
