import { DISHES } from "../shared/details";

//action types
export const add_comment='ADD_COMMENT'
export const add_dishes="add_dishes"
export const is_Loading="is_loading"
export const err_Msg="Err_Msg"



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
export const fetchDishes=()=>(dispatching)=>{
    dispatching(dishLoad(true));

    setTimeout( ()=> {
        dispatching(addDish(DISHES))
    },2000)

}

export const dishLoad=()=>({
    type:is_Loading
})

export const addDish=(dishes)=>({
    type:add_dishes,
    payload:dishes
})
export const dishFailed=(errormessage)=>({
    type:err_Msg,
    payload:errormessage
})