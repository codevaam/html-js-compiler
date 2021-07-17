import { createStore } from "redux";
import { codeReducer } from "./codeReducer";

export const store = createStore(codeReducer)