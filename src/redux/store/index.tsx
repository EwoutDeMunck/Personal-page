import navigationReducer from '../reducers/navigationSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    navigation: navigationReducer
  }
})

export default store;
