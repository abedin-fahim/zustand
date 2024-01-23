import { create } from 'zustand';

// We are essentially creating a custom hook here.
// When we use the create method, we get access to the set method, which allows us to update / set our store values
export const useCounterStore = create((set) => ({
  // Initial state
  counter: 0,
  increment: () => {
    // We can pass a function to the set method which gives us access to the state value. And everything works in sync
    set((state) => ({ counter: state.counter + 1 }));
  },
  decrement: () => {
    set((state) => ({ counter: state.counter - 1 }));
  },
  incrementAsync: async () => {
    await Promise((resolve) => setTimeout(resolve, 1000));
    // const response = await fetch('somethingontheinternet.com/fetch');
    set((state) => ({ counter: state.counter + 1 }));
  },
}));
