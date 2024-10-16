import classes from "./Checkbox.module.css";

export default function Checkbox({ checked }) {
  return (
    <div className={classes.checkbox}>
      {checked && <div className={classes.checked}></div>}
    </div>
  );
}
