import axios from 'axios';

import { ADDNEW_TODO } from './type';


const API_URL = 'http://locarhost:8000';


export const assNewTodo = (data) => async (dispatch) => {

    try {
        const res = await axios.post(`${API_URL}/todos`, { data });

        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.massage);
    }

}