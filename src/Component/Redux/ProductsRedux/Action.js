import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType"

export const FetchingData = (dispatch) => {
    dispatch({ type: LOADING })
    
    axios.get(`https://firebolt-b3qw.onrender.com/Products`, {
        mode: "no cors",
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then((res) => {
            console.log(res.data);
            dispatch({ type: SUCCESS, payload: res.data })

        })

        .catch((err) => {
            console.log(err)
            dispatch({ type: ERROR, })
        })
}
