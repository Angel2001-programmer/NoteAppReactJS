import "./App.css";
import { useEffect, useRef, useState } from "react";
import "./componenets/Notes.css";
import InputNotes from "./componenets/InputNotes";
import Notes from "./componenets/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState("");

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const addToList = () => {
    console.log(notes);
    // setNewNote(value);

    if (value !== "") {
      setNotes([
        ...notes,
        {
          id: Math.floor(Math.random() * 10) + 1,
          name: value,
        },
      ]);
      setValue("");
    } else {
      console.log("App: Failed to add to notes");
    }
  };

  const clickHandler = (noteItem) => {
    setNotes(notes.filter((note) => note !== noteItem));
    alert(noteItem.name + " has been removed!");
    console.log(noteItem);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Notes
          props={{
            notes: notes,
            clickHandler: clickHandler,
          }}
        />

        <InputNotes
          props={{
            value: value,
            addToList: addToList,
            valueHandler: valueHandler,
          }}
        />
      </header>
    </div>
  );
}

export default App;
