// store configuration 

import {createStore, combineReducers ,applyMiddleware} from 'redux';
import {Dishes} from './dishes'
import {Comments} from './comments'
import {Promotions} from './promotions'
import {Leaders} from './leaders'
import thunk from 'redux-thunk';
import logger from "redux-logger";

import { createForms } from 'react-redux-form';
import { InitialFeedback } from "./forms";

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers(
            {
                store_dishes:Dishes,
                store_comments:Comments,
                store_leaders:Leaders,
                store_promotions:Promotions,
                ...createForms({
                    feedback:InitialFeedback
                })
            }
        ),
        applyMiddleware(thunk , logger)
    );
    return store
}

