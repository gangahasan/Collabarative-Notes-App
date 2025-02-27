import axios from "axios";
export const FETCH_NOTES_REQUEST = "FETCH_NOTES_REQUEST";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";
export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";



export const fetchNotes=()=>async(dispatch)=>{
    dispatch({type:FETCH_NOTES_REQUEST});
    try{
        const response = await axios.get(
            "https://redux-firebase-notesapp-default-rtdb.firebaseio.com/notes.json"
        );
        const notes = await response.data;
        console.log(response.data,"response")

        const changednotes = Object.entries(notes)
        
        dispatch({type:FETCH_NOTES_SUCCESS,payload:changednotes});
        
    }
    catch(err){
        dispatch({type:FETCH_NOTES_FAILURE,payload:err.message});
    }
 
}




export const addNote=(newNote)=>async(dispatch)=>{
    
    try{
        await axios.post(
          "https://redux-firebase-notesapp-default-rtdb.firebaseio.com/notes.json",newNote
        )
        dispatch({type:ADD_NOTE,payload:newNote});
    
    }
    catch(err){
        console.log(err);
    }
}
export const deleteNote=(id)=>async(dispatch)=>{
    try{
        await axios.delete(
          `https://redux-firebase-notesapp-default-rtdb.firebaseio.com/notes/${id}.json`
        )
        dispatch({type:REMOVE_NOTE,payload:id});
        fetchNotes();
    
    }
    catch(err){
        console.log(err);
    }
}