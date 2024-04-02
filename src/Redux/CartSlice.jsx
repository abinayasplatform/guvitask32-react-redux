import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        AllCarts:(state,action)=>{
            console.log(state);
            return action.payload
        }
    }
})
export default CartSlice.reducer