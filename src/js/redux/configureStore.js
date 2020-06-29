// store configuration 

import {createStore, combineReducers ,applyMiddleware} from 'redux';
import {Dishes} from './dishes'
import {Comments} from './comments'
import {Promotions} from './promotions'
import {Leaders} from './leaders'
import thunk from 'redux-thunk';
import logger from "redux-logger";

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers(
            {
                con_dishes:Dishes,
                con_comments:Comments,
                con_leaders:Leaders,
                con_promotions:Promotions
            }
        ),
        applyMiddleware(thunk , logger)
    );
    return store
}

