import {baseUrl} from '../shared/baseUrl';
//action types
import * as ActionTypes from './ActionTypes';


// Action creators
/* export const addComment=(dishId,rating,name,comment)=>(
    {
    type:add_comment,
    payload:{
        dishId:dishId,export const add_comment='ADD_COMMENT'
export const add_dishes="add_dishes"
export const is_Loading="is_loading"
export const err_Msg="Err_Msg"
export const add_comments='ADD_COMMENTS'
export const comments_failed='COMMENTS_ERROR'
export const promos_loading='PROMOS_LOADING'
export const add_promos='ADD_PROMOS'
export const promos_failed='PROMOS_FAILED';


        rating:rating,
        author:name,
        comment:comment

        //this side is what registered into the database and shown in our views : right side is our variables which take the values from the views and in this case <CommentForm > in DishDetailComponent.js
     }
     
     // the values are stored in addComment from <CommentForm />
    }
)
 */



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


export const addComment=(comment)=>(
    {
        type:ActionTypes.add_comment,
        payload:comment
    }
)

////////////////////////////////////////////////////////////////

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
    type:ActionTypes.is_Loading
})

export const addDishes=(dishes)=>({
    type:ActionTypes.add_dishes,
    payload:dishes
})
export const dishesFailed=(errormessage)=>({
    type:ActionTypes.err_Msg,
    payload:errormessage
})

////////////////////////////////////////////////////////////////


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
    type:ActionTypes.add_comments,
    payload:comment
})
export const commentsFailed=(errormessage)=>({
    type:ActionTypes.comments_failed,
    payload:errormessage
})

////////////////////////////////////////////////////////////////


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
    type:ActionTypes.promos_loading
})

export const addPromos=(promos)=>({
    type:ActionTypes.add_promos,
    payload:promos
})
export const promosFailed=(errormessage)=>({
    type:ActionTypes.promos_failed,
    payload:errormessage
})


////////////////////////////////////////////////////////////////


export const fetchleaders=()=>(dispatch)=>{
    
    dispatch(leaderLoading(true))

    return fetch(baseUrl+'leaders')
    .then(response=>{
        if(response.ok){
            return response
        }
        else{
            var error=new Error('Error '+response.status+ ' : ' +response.statusText)
            error.response=error
            return error
        }
    })
    .then(response=>response.json())
    .then(item=>dispatch(addLeader(item)))
    .catch(error=>dispatch(leaderError(error.message)))

}

export const addLeader=(item)=>({
    type:ActionTypes.LEADERS_ADD,
    payload:item
})

export const leaderLoading=()=>({
    type:ActionTypes.LEADERS_LOADING,
})

export const leaderError=(item)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:item
})



////////////////////////////////////////////
export const postFeedback=(fname,lname,ph,email,rememberme,contacttype,message)=>(dispatch) =>{
    const newFeedback={
        firstname:fname,
        lastname:lname,
        telnum:ph,
        email:email,
        rememberme:rememberme,
        contacttype:contacttype,
        message:message
    }
    console.log(newFeedback)
    return fetch(baseUrl+'feedback',{
        method:"POST",
        body:JSON.stringify(newFeedback),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
        })
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
        .then(response=>response.json())
        .then(response=>dispatch(addFeedback(response)))
        .catch(error=>{
            console.log(error.message) ;
            alert("Error: Your comment could not be added to database.")
        })
}

export const addFeedback=(item)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:item   
})

