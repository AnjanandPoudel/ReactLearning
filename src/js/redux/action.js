import {baseUrl} from '../shared/baseUrl'
//action types
export const add_comment='ADD_COMMENT'
export const add_dishes="add_dishes"
export const is_Loading="is_loading"
export const err_Msg="Err_Msg"
export const add_comments='ADD_COMMENTS'
export const comments_failed='COMMENTS_ERROR'
export const promos_loading='PROMOS_LOADING'
export const add_promos='ADD_PROMOS'
export const promos_failed='PROMOS_FAILED'




// Action creators
export const addComment=(dishId,rating,name,comment)=>(
    {
    type:add_comment,
    payload:{
        dishId:dishId,
        rating:rating,
        author:name,
        comment:comment

        //this side is what registered into the database and shown in our views : right side is our variables which take the values from the views and in this case <CommentForm > in DishDetailComponent.js
     }
     
     // the values are stored in addComment from <CommentForm />
    }
)

// thunk returns functions
export const fetchDishes=()=>(dispatch_func)=>{
    dispatch_func(dishLoad(true));

    return(
        fetch(baseUrl+'dishes').then(response=>response.json())
        .then(item=>dispatch_func(addDishes(item)))
        );

}
export const dishLoad=()=>({
    type:is_Loading
})

export const addDishes=(dishes)=>({
    type:add_dishes,
    payload:dishes
})
export const dishFailed=(errormessage)=>({
    type:err_Msg,
    payload:errormessage
})




export const fetchComments=()=>(dispatch_func)=>{
//////////////////
    return(
        fetch(baseUrl+'comments').then(response=>response.json())
        .then(item=>dispatch_func(addComments(item)))
        );

}

export const addComments=(comment)=>({
    type:add_comments,
    payload:comment
})
export const commentFailed=(errormessage)=>({
    type:comments_failed,
    payload:errormessage
})


export const fetchPromos=()=>(dispatch_func)=>{
    dispatch_func(promosLoad(true));

    return(
        fetch(baseUrl+'promotions').then(response=>response.json())
        .then(item=>dispatch_func(addPromos(item)))
        );
    
}

export const promosLoad=()=>({
    type:is_Loading
})

export const addPromos=(promos)=>({
    type:add_promos,
    payload:promos
})
export const promosFailed=(errormessage)=>({
    type:promos_failed,
    payload:errormessage
})















