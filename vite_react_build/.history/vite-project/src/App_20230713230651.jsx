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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
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
    <Provider>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
