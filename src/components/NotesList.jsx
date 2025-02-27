import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, fetchNotes } from '../redux/actions/noteActions';

const NotesList = () => {
    const notes = useSelector((state) => state.notes.notes)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchNotes());
    },[])

    const handleDelete = (id) => {
        dispatch (deleteNote(id))
        
    
    }
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        {notes.length > 0 && notes.map((note)=>{
            return (
              <div
                key={note.id}
                style={{
                  border: "2px solid gray",
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2>Title: {note.title}</h2>
                <p>Content: {note.content}</p>
                <p>TimeStamp: {note.timeStamp}</p>
                
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    padding: "5px",
                    margin: "20px",
                  }}
                  onClick={handleDelete(note.id)}
                >
                  Delete
                </button>
              </div>
            ); // Displaying title of each note
        })}
    </div>
  )
}

export default NotesList