import { LOGIN_SUCCESS, LOGOUT } from "../actions/authActions";

const initState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};

export const authReducer=(state = initState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
            case LOGOUT:
                localStorage.removeItem('user')
                return {
                    ...state,
                    user: null,
                    loading: false,
                    error: null,
                };
            
        default:
            return state;
        
    }

}