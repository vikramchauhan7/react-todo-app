import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import "./App.css";

let done1 = true;
let done2 = false;
let done3 = true;
let done4 = false;
let done5 = true;

export default function App() {
  return (
    <div className="app">
      <div className="todos-container">
        {/* TABS */}
        <ul className="tabs">
          <li className="tab active-text">All</li>
          <li className="tab">Active</li>
          <li className="tab">Completed</li>
        </ul>

        {/* TODOS */}
        <div className="todos">
          <div className="todo">
            <Checkbox checked={done1} />
            <span className={`${done1 ? "done" : "active-text"}`}>memo</span>
          </div>

          <div className="todo">
            <Checkbox checked={done2} />
            <span className={`${done2 ? "done" : "active-text"}`}>
              useCallback
            </span>
          </div>

          <div className="todo">
            <Checkbox checked={done3} />
            <span className={`${done3 ? "done" : "active-text"}`}>useMemo</span>
          </div>

          <div className="todo">
            <Checkbox checked={done4} />
            <span className={`${done4 ? "done" : "active-text"}`}>
              useReducer
            </span>
          </div>

          <div className="todo">
            <Checkbox checked={done5} />
            <span className={`${done5 ? "done" : "active-text"}`}>
              useReducer
            </span>
          </div>
        </div>

        <Input placeholder="Add Todo" buttonLabel="Add" />
      </div>
    </div>
  );
}
