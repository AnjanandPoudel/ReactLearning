
import * as ActionTypes from "./ActionTypes";



export const InitialFeedback=(state={
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

