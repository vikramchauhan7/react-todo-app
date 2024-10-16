import { useState } from "react";
import classes from "./Input.module.css";

export default function Input({ placeholder, buttonLabel, onSubmit }) {
  const [value, setValue] = useState("");
  function onButtonClick() {
    onSubmit(value);
    setValue("");
  }

  return (
    <div className={classes.input}>
      <input
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && <button onClick={onButtonClick}>{buttonLabel}</button>}
    </div>
  );
}
