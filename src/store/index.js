import { createStore,applyMiddleware,compose} from "redux"; // si sale tachado es que ya no se usa en la nueva version de redux, pero se mantiene porque no ha migardo y se sigue usando 
import thunk from "redux-thunk"
import { combineReducers } from "redux";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))



export default store 