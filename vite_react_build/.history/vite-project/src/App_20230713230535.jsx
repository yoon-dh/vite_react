import "./App.css";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up(state, action) {
      state.value = state.value + action.step;
    },
  },
});

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
