import { IConfig, createOvermind } from "overmind";
import { namespaced } from "overmind/config";

import * as firebase from "./firebase";
import { createHook } from "overmind-react";

/*
const config = namespaced({
  firebase
});

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

const overmind = createOvermind(config);

export const useOvermind = createHook(overmind);
*/
export const overmind = createOvermind({
  state: {
    count: 0
  }
});
