import {  LOGIN,  SIGNUP } from "./ActionType";

const initialState ={
    isLoading: false,
    isError: false,
    data:[],
    page : false
}
export const reducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case LOGIN:
            return{
                ...state,
                isLoading: true,
            }
            case SIGNUP:
                return{
                    ...state,
                    isLoading: false,
                    data: payload
                }
           
               
        default: return state
    }
}