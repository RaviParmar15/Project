import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./Reducer";
import {ProReducer} from "./ProductsRedux/ProductReducer";
import thunk from "redux-thunk";

const mainreducer= combineReducers({
    reducer,
    ProReducer
})

export const store =legacy_createStore(mainreducer,applyMiddleware(thunk))