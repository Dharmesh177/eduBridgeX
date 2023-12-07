import axios from "../helpers/axios";
import { resourseConstants } from "./constants";

export const getAllResources = () => {
    return async (dispatch) => {
        dispatch({ type: resourseConstants.GET_ALL_RESOURCES_REQUEST })
        const res = await axios.get('/resources')
        console.log('try',res.data.myresources)
        console.log('resources', res);
        if (res.status === 200) {
            dispatch({
                type: resourseConstants.GET_ALL_RESOURCES_SUCCESS,
                payload: { resources: res.data.myresources }
            })
        } else {
            dispatch({
                type: resourseConstants.GET_ALL_RESOURCES_FAILED,
                payload: { error: res.data.message }
            })
        }
    }
}
