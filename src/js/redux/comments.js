import {COMMENTS} from '../shared/comment';
import * as ActionTypes from './ActionTypes';


export const Comments=(state=COMMENTS,action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
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



