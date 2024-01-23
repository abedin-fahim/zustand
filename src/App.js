import React from 'react';
import { useCounterStore } from './store';

// Using/Manipulating state values outside component
const logCounter = () => {
  const counter = useCounterStore.getStore.counter;
  console.log('counter', counter);
};
const setCounter = () => {
  useCounterStore.setStore({ counter: 1 });
};

function App() {
  // We can essentially access these values and assign them to anywhere in our app
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <>
      <p>{counter}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
