import "./App.css";
import { createSlice } from "@reduxjs/toolkit";

function Counter() {
  return (
    <div>
      <button>+</button> 0{" "}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
