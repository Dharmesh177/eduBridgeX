import axios from "../helpers/axios";
import { mentorConstants } from "./constants";

export const getAllMentors = () => {
    return async (dispatch) => {
        dispatch({ type: mentorConstants.GET_ALL_MENTORS_REQUEST })
        const res = await axios.get('/mentors')
        if (res.status === 200) {
            dispatch({
                type: mentorConstants.GET_ALL_MENTORS_SUCCESS,
                payload: { mentors: res.data.users }
            })
            console.log('users', res.data.users);
        } else {
            dispatch({
                type: mentorConstants.GET_ALL_MENTORS_FAILED,
                payload: { error: res.data.message }
            })
        }
    }
}

export const getRecommendedMentors = (interest) => {
    return async (dispatch) => {
        dispatch({ type: mentorConstants.GET_RECOMMENDED_MENTORS_REQUEST })
        const res = await axios.get(`/mentors/recommended-mentors/${interest}`)
        console.log('reccccccmmmmneded', res);
        if (res.status === 200) {
            dispatch({
                type: mentorConstants.GET_RECOMMENDED_MENTORS_SUCCESS,
                payload: { recommendedMentors: res.data.recommendedMentors }
            })
        } else {
            dispatch({
                type: mentorConstants.GET_RECOMMENDED_MENTORS_FAILED,
                payload: { error: res.data.message }
            })
        }
    }
}
