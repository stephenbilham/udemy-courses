import React, { useState, useContext } from "react";
import NoteContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const position = useMousePosition();

  const { dispatch } = useContext(NoteContext);

  const addNote = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      title,
      description
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <p>
        add note {position.x} - {position.y}
      </p>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        >
          Add info
        </textarea>

        <button>add note</button>
      </form>
    </div>
  );
};

export { AddNoteForm as default };
