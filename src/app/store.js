import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from '../app/Counter/CounterState'

export const store = configureStore({
  reducer: {
    counter:counterSlice
  },
})