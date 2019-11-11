import { SetStateAction, Dispatch } from "react";

export type ChoosedMode = "home" | "createMode" | "showMode";

export interface HeaderProps {
  setMode: Dispatch<SetStateAction<ChoosedMode>>;
}

export interface CounterProps {
  count: number;
}
