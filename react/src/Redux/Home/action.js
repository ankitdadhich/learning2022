import {
    REQUEST_USER_DETAILS,
    RECEIVE_USER_DETAILS,
} from './type';
import axios from "axios";
import history from '../../Utility/history';

// Action for getting all user record from API
export const requestUserTable = () => (dispatch) => {
    dispatch({type: REQUEST_USER_DETAILS , payload: true});
    axios.get(`https://localhost:44324/api/Reservation/`).then(res => {
        console.log("response",res);
        dispatch({type: RECEIVE_USER_DETAILS , payload: res.data});
    }).catch(error => {
        console.log("Error",error);
    })
    
}

// Action for edit specific user record
export const requestEditUserTable = (reqPayload) => (dispatch) => {

    axios.put(`https://localhost:44324/api/Reservation/` , reqPayload).then(res => {
        history.push('/');
    }).catch(error => {
        console.log("Error", error);
    })

}

// Action for delete user record
export const requestDeleteUserTable = (reqId) => (dispatch) => {

    axios.delete(`https://localhost:44324/api/Reservation/${reqId}`).then(res => {
        dispatch(requestUserTable());
    }).catch(error => {
        console.log("error",error);
    })
}