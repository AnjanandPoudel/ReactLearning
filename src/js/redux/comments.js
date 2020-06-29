import {COMMENTS} from '../shared/comment';
import * as ActionType from './action'




export const Comments=(state=COMMENTS,action)=>{
    switch(action.type){
        case ActionType.add_comment:
            let comment=action.payload;
            comment.id=state.length;
            comment.date=new Date().toISOString();
            console.log(comment)
            console.log('hi')
            return state.concat(comment);
            
        default:
            return state
    }
}



