import { IConfig } from "overmind";
import { createHook } from "overmind-react";
import * as actions from "./actions";
import { state } from "./state";

export const config = { state, actions };
export const useApp = createHook<typeof config>();

declare module "overmind" {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}
