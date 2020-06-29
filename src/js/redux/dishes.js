import * as Actiontypes from "./action";

export const Dishes=(state={
    finaldish:[],
    isLoading:true,
    errMsg:null
},action)=>{
    switch(action.type){
        case Actiontypes.is_Loading:
            return({...state,isLoading:true,errMsg:null,finaldish:[]})
        case Actiontypes.add_dishes:
            return({...state,isLoading:false,errMsg:null,finaldish:action.payload})
        case Actiontypes.err_Msg:
            return({...state,isLoading:false,errMsg:action.payload,finaldish:[]})
        default:
            return state
    }
}

