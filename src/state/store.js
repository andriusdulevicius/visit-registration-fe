import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export const storeConfig = () => {
  const store = configureStore({
    reducer: reducers,
    enhancers: [],
    devTools: true,
  });
  return {
    store,
  };
};

// export type AppState = ReturnType<typeof reducers>;
