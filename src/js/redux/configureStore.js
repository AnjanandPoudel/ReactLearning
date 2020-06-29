// store configuration 

import {createStore, combineReducers } from 'redux';
import {Dishes} from './dishes'
import {Comments} from './comments'
import {Promotions} from './promotions'
import {Leaders} from './leaders'

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers(
            {
                con_dishes:Dishes,
                con_comments:Comments,
                con_leaders:Leaders,
                con_promotions:Promotions
            }
        )
    );
    return store
}

