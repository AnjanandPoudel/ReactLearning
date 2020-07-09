import * as ActionType from './ActionTypes';




export const Comments=(state={
    errMsg:null,
    comments:[]
},action)=>{
    switch(action.type){
        case ActionType.add_comments: ///old
            return {...state, errMsg: null, comments: action.payload};
        case ActionType.comments_failed:
            return{...state,errMsg:action.payload}
        
        case ActionType.add_comment: ///new
            let comment=action.payload;
            return {...state , comments:state.comments.concat(comment)}
        

        default:
            return state
    }
}



