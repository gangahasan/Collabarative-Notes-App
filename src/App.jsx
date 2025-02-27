import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { login } from './redux/actions/authActions';
import NotesDashboard from './pages/NotesDashboard';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSignin = () => {
    dispatch(login())
    // Google Sign-In code here
  }
  return (
    <div>
       {user ? 
       <NotesDashboard /> : 
       <button onClick={handleSignin}>Login with Google</button>} 
    </div>
  )
}

export default App