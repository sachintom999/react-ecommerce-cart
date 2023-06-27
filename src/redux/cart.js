import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        cartCount:0
    },
    reducers: {

        increment: (state, action) => {

            const prodId = action.payload?.id

            const ii = state.cartList.findIndex((item) => { return item.id === prodId })
            if (ii != -1) {

                state.cartList[ii].count += 1

            }

            state.cartCount++


        },
        decrement: (state, action) => {


            const prodId = action.payload?.id
            const idx = state.cartList.findIndex((item) => { return item.id === prodId })
            if (idx != -1 && state.cartList[idx].count > 1) {
                state.cartList[idx].count -= 1
            }

            else {
                const newCart = state.cartList.filter((item) => { return item.id !== prodId })
                state.cartList = newCart
            }
            state.cartCount--

        },

        addToCart: (state, action) => { 
            state.cartList.push({ ...action.payload, count: 1 }) 
            state.cartCount++
        
        }

    }
})

export const { increment, addToCart, decrement } = cartSlice.actions

export default cartSlice.reducer