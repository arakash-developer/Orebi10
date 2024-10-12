import { configureStore } from "@reduxjs/toolkit"
import counterSlice from '../features/counters/CouterSlice'
const Store = configureStore({
    reducer:{
        counters: counterSlice,
    },
})
export default Store