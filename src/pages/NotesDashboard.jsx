import React from 'react'
import NoteForm from '../components/NoteForm'
import NotesList from '../components/NotesList'

const NotesDashboard = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <h1>Collabarative Notes</h1>
        <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"6px",padding:"5px"}}>Logout</button>

        <NoteForm />
        <NotesList />
    </div>
  )
}

export default NotesDashboard