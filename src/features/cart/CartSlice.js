import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    items: []
}
const cartSlice = createSlice({
    name:"cart",
    initialState : initialState,
    reducers : {
        addToCart(state,action){
            const {productId,quantity,price} = action.payload;
            let indexProductId = state.items.findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity
            }else{
                state.items.push({productId,quantity,price})
            }
        }
    }
})
export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;