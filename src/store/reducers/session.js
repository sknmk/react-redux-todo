import { SESSION, SESSION_RESET } from '../actionTypes'

const initialState = {
    userDetails: {},
};

const sessionReducer = function (state = initialState, action) {
    switch (action.type) {
        case SESSION: {
            return {
                ...state,
                userDetails: action.payload
            };
        }
        case SESSION_RESET: {
            return {
                ...state,
                userDetails: {}
            };
        }
        default:
            return state;
    }
}

export default sessionReducer
