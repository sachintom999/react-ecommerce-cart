import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "product",
    initialState: {
        productList:[]
    },
    reducers: {

        increment: (state) => { state.count += 1 },

        setProducts : (state,action)=>{ state.productList = action.payload}



    }
})

export const { increment,setProducts } = productSlice.actions

export default productSlice.reducer