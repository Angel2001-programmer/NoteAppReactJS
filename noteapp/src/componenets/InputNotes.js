import { useState } from "react";

const InputNotes = ({props}) => {
    return(
      <div>
      <input
        placeholder="Enter your note here!"
        value={props.value}
        onChange={props.valueHandler}
      />
      <button onClick={props.addToList}>Enter</button>
    </div>
    )
}

export default InputNotes;