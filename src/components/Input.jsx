import classes from "./Input.module.css";

export default function Input({ placeholder, buttonLabel }) {
  return (
    <div className={classes.input}>
      <input placeholder={placeholder} type="text" />
      <button>{buttonLabel}</button>
    </div>
  );
}
