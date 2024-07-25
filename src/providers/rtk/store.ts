import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './slices/calculator';
import modalReducer from './slices/modal';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    modal: modalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
