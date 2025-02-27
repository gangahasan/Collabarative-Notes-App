import React from 'react'
import { useDispatch } from 'react-redux'
import NoteForm from '../components/NoteForm'
import NotesList from '../components/NotesList'
import { logout } from '../redux/actions/authActions'

const NotesDashboard = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        console.log("clicked")
        dispatch(logout);
    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <h1>Collabarative Notes</h1>
        <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"6px",padding:"5px"}} onClick={handleLogout}>Logout</button>

        <NoteForm />
        <NotesList />
    </div>
  )
}

export default NotesDashboard