import { ADD_NOTE, FETCH_NOTES_SUCCESS, REMOVE_NOTE } from "../actions/noteActions";

const initState = {
  notes: [],
  loading: false,
  error: null,
};

export const notesReducer=(state=initState,action)=>{
    switch(action.type){
        case FETCH_NOTES_SUCCESS:

            return{
                
                ...state,notes: [...state.notes,action.payload]
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
                loading: false,
                error: null,
            };
        case REMOVE_NOTE:
            return {
                notes: state.notes.filter(note=>note.id!==action.payload),
                loading: false,
                error: null,
            };
    
        default:
            return state;
    }

}