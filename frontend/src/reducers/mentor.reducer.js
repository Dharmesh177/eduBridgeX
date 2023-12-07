import { mentorConstants } from "../actions/constants"

const initState = {
    mentors: [],
    loading: false,
    error: {},
    recommendedMentors: []
}


export const mentorReducer = (state = initState, action) => {
    switch (action.type) {
        case mentorConstants.GET_ALL_MENTORS_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case mentorConstants.GET_ALL_MENTORS_SUCCESS: {
            return {
                ...state,
                loading: false,
                mentors: action.payload.mentors
            }
        }
        case mentorConstants.GET_ALL_MENTORS_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
        case mentorConstants.GET_RECOMMENDED_MENTORS_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case mentorConstants.GET_RECOMMENDED_MENTORS_SUCCESS: {
            return {
                ...state,
                loading: false,
                recommendedMentors: action.payload.recommendedMentors
            }
        }
        case mentorConstants.GET_RECOMMENDED_MENTORS_FAILED: {
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
