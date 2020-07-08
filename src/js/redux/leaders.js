import * as ActionTypes from './ActionTypes';


export const Leaders=(state={ leaders:[],leaderError:'',leaderLoading:true },action)=>{
    
    switch(action.type){
        case ActionTypes.LEADERS_ADD:
            return {...state, leaders:action.payload,leaderLoading:false,leaderError:''}
        case ActionTypes.LEADERS_FAILED:
            return {...state, leaders:[],leaderError:action.payload,leaderLoading:false}
        case ActionTypes.LEADERS_LOADING:
            return {...state, leaders:[],leaderLoading:true,leaderError:''}
    
        default:
            return state
    }
}