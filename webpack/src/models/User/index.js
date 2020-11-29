import { sanitizeStr } from "helpers/text";

export function createUser(name) {
  return {
    name: sanitizeStr(name),
  };
}
