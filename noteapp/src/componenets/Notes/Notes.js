import "./Notes.css"
import { useState } from "react";

const Notes = ({props}) => {
return(
        <div className="notes">
            {props.notes.map(note => {
                return (
                    <div className="noteItem" key={note.id}>
                    <p>{note.name}</p>
                    <button className="binIcon" onClick={() => props.clickHandler(note)}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    viewBox="0 -960 960 960" 
                    width="48"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/>
                    </svg>
                    </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Notes;