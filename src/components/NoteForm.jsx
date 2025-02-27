import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/actions/noteActions';

const NoteForm = () => {
    const [note,setNote] = useState('')
    const dispatch = useDispatch();
    const handleAdd=()=>{
        const newNote = {
            title : note,
            content: "note content",
            timeStamp: Date.now()
        }
        dispatch(addNote(newNote));
        alert("note added successfully")

    }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "5px",
          margin:"20px"
        }}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default NoteForm