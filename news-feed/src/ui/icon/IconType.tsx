import { newGuid } from "@/utils/newGuid";
import { ReactComponent as Loading } from "@assets/icons/Loading.svg";
import { ReactComponent as News } from "@assets/icons/News.svg";
import { ReactComponent as Profile } from "@assets/icons/Profile.svg";
import { ReactComponent as Sources } from "@assets/icons/Sources.svg";
import { ReactComponent as Edit } from "@assets/icons/Edit.svg";
import { ReactComponent as Logo } from "@assets/icons/Logo.svg";

export type IconType =
  | "Loading"
  | "Profile"
  | "Sources"
  | "News"
  | "Edit"
  | "Logo";

export const iconTypes = new Map([
  ["Loading", <Loading key={newGuid()} />],
  ["News", <News key={newGuid()} />],
  ["Profile", <Profile key={newGuid()} />],
  ["Sources", <Sources key={newGuid()} />],
  ["Edit", <Edit key={newGuid()} />],
  ["Logo", <Logo key={newGuid()} />],
]);
