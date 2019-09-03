import { combineReducers } from "redux";
import contatoReducer from "./contatoReducer";

const reducers = combineReducers({
    contato: contatoReducer
});

export default reducers;