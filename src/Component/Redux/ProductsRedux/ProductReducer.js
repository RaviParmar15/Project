// import state from "sweetalert/typings/modules/state";
import { LOADING,SUCCESS,ERROR } from "./ActionType";
// import { SUCCESS } from "../ActionType";

let initialState={
    isloding:false,
    isError:false,
    data:[]
}
export const ProReducer =(state=initialState,{type,payload})=>{
    
    switch (type) {
        case LOADING:
            return{
                ...state,
                isloding:true
            }
            case SUCCESS:
                return{
                    ...state,
                    isloding:false,
                    data:payload
                }
                case ERROR:
                    return{
                        ...state,
                        isError:true,
                    }
            
            break;
    
        default: return state
            break;
    }


}