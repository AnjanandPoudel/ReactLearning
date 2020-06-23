import {DISHES} from '../shared/details';
import {PROMOTIONS} from '../shared/promotion';
import {COMMENTS} from '../shared/comment';
import {LEADERS} from '../shared/leader';

export const initialState={
    dishes:DISHES,
    promotions:PROMOTIONS,
    comments:COMMENTS,
    leaders:LEADERS
}

export const Reducer=(state =initialState ,action)=>{
    return state
}; //pure function (can't modify state directly , immutable change)-
// initialState is a default value of state.

