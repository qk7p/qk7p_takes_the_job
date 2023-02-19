import { newGuid } from "utils/guid";
import { ReactComponent as TS } from "assets/icons/TypeScript.svg";
import { ReactComponent as CSS } from "assets/icons/CSS.svg";
import { ReactComponent as HTML } from "assets/icons/HTML.svg";
import { ReactComponent as React } from "assets/icons/React.svg";
import { ReactComponent as Redux } from "assets/icons/Redux.svg";
import { ReactComponent as Fishing } from "assets/icons/Fishing.svg";
import { ReactComponent as BirdWatching } from "assets/icons/Bird.svg";
import { ReactComponent as Music } from "assets/icons/Music.svg";
import { ReactComponent as DixiPro } from "assets/icons/Dixi.svg";
import { ReactComponent as Arrow } from "assets/icons/Arrow.svg";
import { ReactComponent as VK } from "assets/icons/VK.svg";
import { ReactComponent as TG } from "assets/icons/TG.svg";
import { ReactComponent as WA } from "assets/icons/WA.svg";
import { ReactComponent as Print } from "assets/icons/Print.svg";
import { ReactComponent as GitHub } from "assets/icons/GitHub.svg";

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
  ["TS", <TS key={newGuid()} />],
  ["CSS", <CSS key={newGuid()} />],
  ["HTML", <HTML key={newGuid()} />],
  ["React", <React key={newGuid()} />],
  ["Redux", <Redux key={newGuid()} />],
  ["Fishing", <Fishing key={newGuid()} />],
  ["BirdWatching", <BirdWatching key={newGuid()} />],
  ["Music", <Music key={newGuid()} />],
  ["DixiPro", <DixiPro key={newGuid()} />],
  ["Arrow", <Arrow key={newGuid()} />],
  ["VK", <VK key={newGuid()} />],
  ["TG", <TG key={newGuid()} />],
  ["WA", <WA key={newGuid()} />],
  ["Print", <Print key={newGuid()} />],
  ["GitHub", <GitHub key={newGuid()} />],
]);
