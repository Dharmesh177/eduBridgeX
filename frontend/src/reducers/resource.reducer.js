import { resourseConstants } from "../actions/constants"

const initState = {
    resources: [],
    loading: false,
    error: {}
}


export const resourceReducer = (state = initState, action) => {
    switch (action.type) {
        case resourseConstants.GET_ALL_RESOURCES_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case resourseConstants.GET_ALL_RESOURCES_SUCCESS: {
            return {
                ...state,
                loading: false,
                resources: action.payload.resources
            }
        }
        case resourseConstants.GET_ALL_RESOURCES_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
        default:
            return {
                ...state
            }
    }
}
