import * as ActionTypes from './action';

export const Dishes = (state = { isLoading: true,
    errMess: null,
    finaldish:[] }, action) => {
    switch (action.type) {
        case ActionTypes.add_dishes:
            return {...state, isLoading: false, errMess: null, finaldish:action.payload };

        case ActionTypes.is_Loading:
            return {...state, isLoading: true, errMess: null, finaldish: []}

        case ActionTypes.err_Msg:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};