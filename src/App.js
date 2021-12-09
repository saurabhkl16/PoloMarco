import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Marco");
  const [btntext, setBtnext] = useState("polo");

  const btnHandler = () => {
    if (text === "Macro") {
      setText("Polo");
      setBtnext("Macro");
    } else {
      setText("Macro");
      setBtnext("Polo");
    }
  };

  return (
    <div className="App">
      <h1 id="marco- polo">{text}</h1>
      <button onClick={btnHandler} id="marco-polo-toggler">
        {btntext}
      </button>
    </div>
  );
}
