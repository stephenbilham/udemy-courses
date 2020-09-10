import React, { useReducer, useEffect } from "react";
import noteReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";

const AppNotes = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(noteReducer, []);

  useEffect(() => {
    console.log("this should only be run once");
    const notesData = JSON.parse(localStorage.getItem("notez"));
    if (notesData) {
      dispatch({
        type: "POPULATE_NOTES",
        notes: notesData
      });
      // setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notez", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export { AppNotes as default };
