import { SetStateAction, Dispatch } from "react";

export type ChoosenApp = "home" | "createMode" | "showMode";

export interface HeaderProps {
  setMode: Dispatch<SetStateAction<ChoosenApp>>;
}

export interface CounterProps {
  count: number;
}
