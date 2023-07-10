import { useState } from "react";

const InputNotes = (props) => {
  const [value, setValue] = useState("");

  const valueHandler = (e) => {
    setValue(e.target.value); 
  }

    return(
      <div>
        <input 
        placeholder='Enter your note here!'
        value={value}
        onChange={valueHandler}
        />
        <button onClick={props.data}>Enter</button>
        </div>
    )
}

export default InputNotes;