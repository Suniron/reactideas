import { createStore } from "redux";
import reducers from "redux/reducers";

const configureStore = () => {
  return createStore(reducers);
};

export default configureStore;
