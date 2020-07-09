
import * as ActionTypes from "./ActionTypes";


export const FeedInfo=(state={
    feedbackInfo:[],
    errFeedback:''
    },
    action     )=>{
    switch (action.type){
        case ActionTypes.ADD_FEEDBACK:
            return{...state , feedbackInfo:action.payload,errFeedback:''} 
        case ActionTypes.FEEDBACK_FAILED:
            return{...state , errFeedback:action.payload} 
        default:
            return state
    }
}



export const InitialFeedback={

    firstname:'',
    lastname:'',
    telnum:'',
    email:'',
    rememberme:false,
    contacttype:'tel',
    message:''

}

