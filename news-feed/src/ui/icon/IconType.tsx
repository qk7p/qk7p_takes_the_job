import { newGuid } from "@/utils/newGuid";
import { ReactComponent as Loading } from "@assets/icons/Loading.svg";

export type IconType = "Loading";

export const iconTypes = new Map([["Loading", <Loading key={newGuid()} />]]);
