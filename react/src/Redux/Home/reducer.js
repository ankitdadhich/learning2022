import {
    REQUEST_USER_DETAILS,
    RECEIVE_USER_DETAILS,
} from './type';


const INITIAL_STATE = {
    userData: [],
    isLoading: false
}

export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case RECEIVE_USER_DETAILS: {
            return {
                ...state,
                userData: action.payload,
                isLoading: false
            }
        }

        case REQUEST_USER_DETAILS: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        
        default: 
            return {
                ...state
            }
    }
}
