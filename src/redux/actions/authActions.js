import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth , googleProvider} from "../../firebase/firebase.config";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const login = () => async (dispatch) => {
  try {
    const userCredentials = await signInWithPopup(auth,googleProvider)
    console.log(userCredentials,"user");
    dispatch({ type: LOGIN_SUCCESS, payload: userCredentials.user });
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => async (dispatch) => {
    try{
        await signOut(auth);
        dispatch({type: LOGOUT})

    }
    catch(err){
        console.err(err);
    }
}
