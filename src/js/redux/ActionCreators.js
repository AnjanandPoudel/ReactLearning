
import * as ActionTypes from './ActionTypes';

// Action creators
export const addComment=(dishId,rating,author,comment)=>(
    {
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        name:author,
        comment:comment
    }
    }
)