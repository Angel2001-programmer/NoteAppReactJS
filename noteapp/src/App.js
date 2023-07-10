import './App.css';
// import Notes from './componenets/Notes';
// import InputNotes from "./componenets/InputNotes";
import { useState } from "react";
import "./componenets/Notes.css"

function App() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState("");
  const [newNote, setNewNote] = useState("");
  const [startAnimation, setAnimation] = useState(false);  

  const valueHandler = (e) => {
    setValue(e.target.value); 
  }

  const addToList = () => {
    console.log(notes);
    setNewNote(value);

      if(value !== "") {
      setNotes([...notes, {
        id: Math.floor(Math.random() * 10) + 1,
        name: value
      }]);
      setValue("");
      } else {
        console.log("App: Failed to add to notes");
      }
    }

    const clickHandler = (noteItem) =>{
      setAnimation(!startAnimation);
      setTimeout(() => {
        setNotes(notes.filter((note) => note !== noteItem));
        console.log(noteItem);
        }, 1000)
        alert(noteItem.name + " has been removed!");
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="notes">
            {notes.map(note => {
                return (
                    <div className="noteItem" key={note.id}>
                    <p>{note.name}</p>
                    <button 
                    className='binIcon'
                  onClick={() => clickHandler(note)}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    viewBox="0 -960 960 960" 
                    width="48"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"
                    />
                    </svg>
                    </button>
                    
                    </div>
                )
            })}
        </div>        <div>
        <input 
        placeholder='Enter your note here!'
        value={value}
        onChange={valueHandler}
        />
        <button onClick={addToList}>Enter</button>
        </div>      
        </header>
    </div>
  );
}

export default App;