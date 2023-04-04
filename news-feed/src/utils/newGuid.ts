import { v4 as uuid } from "uuid";

export function newGuid() {
  return uuid();
}
