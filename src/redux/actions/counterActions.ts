import { Action } from "./types";

export const increment: (value: number) => Action = value => ({
  type: "INCREMENT",
  value
});
export const decrement: (value: number) => Action = value => ({
  type: "DECREMENT",
  value
});
