import { createOvermind, IConfig } from "overmind";
import { statement } from "@babel/template";
import { State, Action } from "./types";
//import { IConfig, createOvermind } from "overmind";
/*
import { namespaced } from "overmind/config";
import { createHook } from "overmind-react";
import * as firebase from "./firebase";


const config = namespaced({
  firebase
});

const overmind = createOvermind(config);

export const useOvermind = createHook(overmind);
*/
const config = {};

const state: State = {
  count: 0
};

const actions: Action = {
  increaseCount({ state }) {
    state.count++;
  },
  decreaseCount({ state }) {
    state.count--;
  }
};

declare module "overmind" {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}
export const overmind = createOvermind({
  state: state,
  actions: actions
});
