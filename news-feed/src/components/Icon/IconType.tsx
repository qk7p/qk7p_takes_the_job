import { ReactComponent as Music } from "assets/icons/Music.svg";
import { ReactComponent as Arrow } from "assets/icons/Arrow.svg";
import { ReactComponent as VK } from "assets/icons/VK.svg";
import { ReactComponent as TG } from "assets/icons/TG.svg";
import { ReactComponent as WA } from "assets/icons/WA.svg";
import { ReactComponent as Print } from "assets/icons/Print.svg";
import { newGuid } from "../../utils/guid";

export type IconType =
  | "TS"
  | "CSS"
  | "HTML"
  | "React"
  | "Redux"
  | "Fishing"
  | "BirdWatching"
  | "Music"
  | "DixiPro"
  | "Arrow"
  | "VK"
  | "TG"
  | "WA"
  | "Print"
  | "GitHub";

export const iconTypes = new Map([
  ["Music", <Music key={newGuid()} />],
  ["Arrow", <Arrow key={newGuid()} />],
  ["VK", <VK key={newGuid()} />],
  ["TG", <TG key={newGuid()} />],
  ["WA", <WA key={newGuid()} />],
  ["Print", <Print key={newGuid()} />],
]);
