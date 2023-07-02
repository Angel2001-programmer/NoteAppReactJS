import "./Notes.css"
import { useState } from "react";

const Notes = ({props}) => {
    const [isActive, SetActive] = useState(false);
    const [notes, setNotes] = useState(props);

    const clickHandler = (item) =>{
        SetActive(!isActive);
        const newNotes = notes.filter((note) => note !== item);
        setNotes(newNotes);
    }

return(
        <div className="notes">
            {notes.map(item => {
                return (
                    <div className="noteItem" key={item.id}>
                    <p>{item.name}</p>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    viewBox="0 -960 960 960" 
                    width="48"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"
                    onClick={() => {clickHandler(item.name)}}
                    />
                    </svg>
                    </div>
                )
            })}
        </div>
    )
}

export default Notes;