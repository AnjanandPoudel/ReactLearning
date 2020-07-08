import * as ActionType from './action'


export const Promotions=(state={
    isLoading:false,
    errMsg:null,
    promos:[]
},action)=>{
    switch(action.type){
        case ActionType.add_promos:
            return{...state,promos:action.payload,isLoading:false,errMsg:null}
        case ActionType.promos_loading:
            return{...state,promos:[],isLoading:true,errMsg:null}
        case ActionType.promos_failed:
            return{...state , isLoading:false,errMsg:action.payload}
        default:
            return state
    }
}