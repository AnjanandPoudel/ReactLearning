//action types
export const add_comment='ADD_COMMENT'



// Action creators
export const addComment=(dishId,rating,author,comment)=>(
    {
    type:add_comment,
    payload:{
        dishId:dishId,
        rating:rating,
        name:author,
        comment:comment
    }
    }
)