import React from "react";
import { sanitizeStr } from "helpers/text";

export const Button = ({ children }) => {
  return <button>{sanitizeStr(children)}</button>;
};
