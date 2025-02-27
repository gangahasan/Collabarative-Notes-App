import React from 'react'
import NoteForm from '../components/NoteForm'
import NotesList from '../components/NotesList'

const NotesDashboard = () => {
  return (
    <div>
        <h1>Collabarative Notes</h1>
        <button>Logout</button>

        <NoteForm />
        <NotesList />
    </div>
  )
}

export default NotesDashboard