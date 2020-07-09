// store configuration 

import {createStore, combineReducers ,applyMiddleware} from 'redux';
import {Dishes} from './dishes'
import {Comments} from './comments'
import {Promotions} from './promotions'
import {Leaders} from './leaders'
import thunk from 'redux-thunk';
import logger from "redux-logger";

import { createForms } from 'react-redux-form';
import { InitialFeedback,FeedInfo } from "./forms";

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers(
            {
                store_dishes:Dishes,
                store_comments:Comments,
                store_leaders:Leaders,
                store_promotions:Promotions,
                store_feedback:FeedInfo,
                ...createForms({
                    feedback:InitialFeedback
                })
            }
        ),
        applyMiddleware(thunk , logger)
    );
    return store
}

