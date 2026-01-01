import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { ProductReducer } from "./product-reducer";


const rootReducer = combineReducers({
    products: ProductReducer,
})

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;