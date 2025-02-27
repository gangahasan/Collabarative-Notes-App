import { LOGIN_SUCCESS } from "../actions/authActions";

const initState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer=(state = initState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        default:
            return state;
        
    }

}