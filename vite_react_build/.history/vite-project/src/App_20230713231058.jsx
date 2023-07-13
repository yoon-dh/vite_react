import "./App.css";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

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
  const count = useSelect((state) => state.counter.value);
  return (
    <div>
      <button>+</button> 0{" "}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
