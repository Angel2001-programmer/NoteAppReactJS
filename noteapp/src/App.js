import "./App.css";
import { useState } from "react";
import InputNotes from "./componenets/InputNotes";
import Notes from "./componenets/Notes/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState("");

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const addToList = () => {
    console.log(notes);

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
      console.log("Failed to add to notes");
      alert("Failed to add to notes. \nplease try again.");
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
