import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './Services/Reducers';
const store = configureStore({
  reducer,
})
export default store;