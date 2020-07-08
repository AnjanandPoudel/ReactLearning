import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true,
    errMsg: null,
    finaldish:[] }, action) => {
    switch (action.type) {
        case ActionTypes.add_dishes:
            return {...state, isLoading: false, errMsg: null, finaldish:action.payload };

        case ActionTypes.is_Loading:
            return {...state, isLoading: true, errMsg: null, finaldish: []}

        case ActionTypes.err_Msg:
            return {...state, isLoading: false, errMsg: action.payload};

        default:
            return state;
    }
};