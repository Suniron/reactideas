import { SetStateAction, Dispatch } from "react";

export type ChoosenApp = "home" | "createMode" | "showMode";

export type HeaderProps = {
  setMode: Dispatch<SetStateAction<ChoosenApp>>;
};
