import { Action } from "redux/actions/types";
import { InitialCounterState } from "./types";

const initialCounterState: InitialCounterState = {
  currentCount: 0
};

const counter = (state = initialCounterState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { currentCount: state.currentCount += action.value };
    case "DECREMENT":
      return { currentCount: state.currentCount -= action.value };
    default:
      return state;
  }
};

export default counter;
