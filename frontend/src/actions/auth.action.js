import { authConstants } from "./constants"
import axios from '../helpers/axios'

export const login = (user) => {

    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST })
        const res = await axios.post('/auth/signup', user)

        if (res.status === 200) {
            const { user, role } = res.data
            localStorage.setItem('role', role)
            localStorage.setItem('user', JSON.stringify(user))
            console.log('resssss', res)
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    role, user
                }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGOUT_FAILED,
                    payload: {
                        error: res.msg
                    }
                })
            }
        }

    }
}

// export const isUserLoggedIn=()=>{
//     return async(dispatch)=>{
//         const token=localStorage.getItem('token')
//         if(token){
//             const user=JSON.parse(localStorage.getItem('user'))
//             dispatch({
//                 type:authConstants.LOGIN_SUCCESS,
//                 payload:{
//                     token,user
//                 }
//             })
//         }else{
//             dispatch({
//                 type:authConstants.LOGIN_FAILURE,
//                 payload:{
//                 error:'failed to SignIn'
//                 }
//             })
//         }
//     }
// }

// export const signOut=()=>{
//     return async (dispatch)=>{
//         dispatch({type:authConstants.LOGOUT_REQUEST})
//         const res=await axios.post('/admin/signout')
//         if(res.status===200){
//             localStorage.clear()
//             dispatch({
//                 type:authConstants.LOGOUT_SUCCESS,
//                 payload:res.data.message
//             })
//         }else{
//             dispatch({
//                 type:authConstants.LOGOUT_FAILED,
//                 payload:res.data.error
//             })
//         }
//     }
// }