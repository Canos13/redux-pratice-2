import { configureStore } from '@reduxjs/toolkit'
import conditionsReducer from '../features/conditions/conditionSlice'

export const store = configureStore({
    reducer: {
        conditions: conditionsReducer
    },
})