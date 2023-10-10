import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType"

export const FetchingData = (dispatch) => {
    dispatch({ type: LOADING })
    axios.get(`https://dummyjson.com/products`)
        .then((res) => {
            dispatch({
                type: SUCCESS,
                payload: res.json

            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: ERROR,})
        })



}
