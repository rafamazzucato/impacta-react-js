import { combineReducers } from "redux";
import cursoReducer from "./cursoReducer";

const reducers = combineReducers({
    curso: cursoReducer
});

export default reducers;