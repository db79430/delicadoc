import {combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {infoPromoReducer} from "../reducers/info-users-reducer";


const rootReducer = combineReducers(
    {
        infoPromo: infoPromoReducer,
    }
)

const store = configureStore({
    reducer: rootReducer,
});

export default store;

