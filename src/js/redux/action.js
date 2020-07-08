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
export const promos_failed='PROMOS_FAILED';




// Action creators
/* export const addComment=(dishId,rating,name,comment)=>(
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
 */

export const addComment=(comment)=>(
    {
        type:add_comment,
        payload:comment
    }
)


export const postComment=(dishId,rating,name,comment) => (dispatch)=>{

    let newComment={

        dishId:dishId,
        rating:rating,
        author:name,
        comment:comment

        //this side is what registered into the database and shown in our views : right side is our variables which take the values from the views and in this case <CommentForm > in DishDetailComponent.js
    } 
    newComment.date=new Date().toISOString();

    return fetch(baseUrl+'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    } ) 
        
    .then(response=>{
        if(response.ok){
            return response
        }
        else{
            let error=new Error('Error'+response.status+' : '+response.statusText)
            error.response=error
            throw error
        }
    })
    .then(response=>(response.json()))
    .then(response=>(dispatch(addComment(response))))
    .catch(error=>{
        console.log(error.message) ;
        alert("Error: Your comment could not be added to database.")
    })

}



// thunk returns functions
    export const fetchDishes = () => (dispatch) => {

        dispatch(dishesLoading(true));
    
        return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ' : ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
          error => {
                var errmess = new Error(error.message+" Dish Error");
                throw errmess;
          })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
    }
    
export const dishesLoading=()=>({
    type:is_Loading
})

export const addDishes=(dishes)=>({
    type:add_dishes,
    payload:dishes
})
export const dishesFailed=(errormessage)=>({
    type:err_Msg,
    payload:errormessage
})



export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = "Comment error";
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const addComments=(comment)=>({
    type:add_comments,
    payload:comment
})
export const commentsFailed=(errormessage)=>({
    type:comments_failed,
    payload:errormessage
})



export const fetchPromos=()=>(dispatch_func)=>{

    dispatch_func(promosLoad(true));

    return(
        fetch(baseUrl+'promotions')
        .then(response => {
            if(response.ok){
                return response
            }
            else{
                var error= new Error('Error '+response.status+" : "+response.statusText)
                error.response=response
                throw error
            }
        }
        ,
        error=>{
            var errormsg = new Error(error.message);
            throw errormsg
        }
        )
        .then(response=>response.json())
        .then(item=>dispatch_func(addPromos(item)))
        .catch(error=>dispatch_func(promosFailed(error.message)))

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















