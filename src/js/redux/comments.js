import * as ActionType from './action'




export const Comments=(state={
    errMsg:null,
    comments:[]
},action)=>{
    switch(action.type){
        case ActionType.add_comments:
            return {...state, errMsg: null, comments: action.payload};
        case ActionType.comments_failed:
            return{...state,errMsg:action.payload}
        
        case ActionType.add_comment:
            let comment=action.payload;
            comment.id=state.comments.length;
            comment.date=new Date().toISOString();
            console.log(comment)
            console.log('hi')
            return {...state , comments:state.comments.concat(comment)}
        

        default:
            return state
    }
}



