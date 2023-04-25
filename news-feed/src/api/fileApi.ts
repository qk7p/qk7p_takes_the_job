import privateApi from "./privateApi";

export function getFolders() {
  return privateApi.get("/folders");
}
