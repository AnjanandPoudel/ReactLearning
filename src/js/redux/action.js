//action types
export const add_comment='ADD_COMMENT'



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