import { authConstants } from '../actions/constants'

const initState = {
    // token: null,
    isUserLoggedIn:false,
    user: {},
    role: '',
    loading: false,
    error: ''
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                role: action.payload.role,
                isUserLoggedIn:true,
                loading: false
            }
        case authConstants.LOGIN_FAILURE: {
            return {
                ...state,
                error: action.payload.error,
                isUserLoggedIn:false,
                loading: false
            }
        }
        // case authConstants.LOGOUT_REQUEST:
        //     return {
        //         ...state,
        //         loading:true
        //     }
        // case authConstants.LOGOUT_SUCCESS:
        //     return {
        //         ...initState
        //     }
        // case authConstants.LOGOUT_FAILED:
        //     return{
        //         ...state,
        //         loading:false,
        //         error:action.payload
        //     }
        default: return state
    }
}

