import { IConfig, createOvermind } from "overmind";
import { namespaced } from "overmind/config";
import * as firebase from "./firebase";
import { createHook } from "overmind-react";

export const config = namespaced({
  firebase
});

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
