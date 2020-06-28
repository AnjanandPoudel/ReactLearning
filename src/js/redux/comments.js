import {COMMENTS} from '../shared/comment';
import { actionTypes } from 'react-redux-form';


export const Comments=(state=COMMENTS,action)=>{
    switch(action.type){
        case actionTypes.add_comment:
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
