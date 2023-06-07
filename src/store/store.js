import { configureStore } from '@reduxjs/toolkit'
import showSlice from './showSlice'
export const store = configureStore({
    reducer: {
        showSlice
    },
})