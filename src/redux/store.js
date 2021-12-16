import { createStore } from "redux";
import { reducer } from "./reducer";

const dishStore = createStore(reducer);

export default dishStore;
