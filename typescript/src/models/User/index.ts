import { sanitizeStr } from "helpers/text";

export function createUser(name: string) {
  return {
    name: sanitizeStr(name),
  };
}
