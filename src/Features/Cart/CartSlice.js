import { createSlice } from "@reduxjs/toolkit";

const intialState={
    cartItems:[],
    numItemInCart:0,
    cartTotal:0,
    shipping:500,
    tax:0,
    orderTotal:0
}

const  getCartFromLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('cart')) || intialState
}

const cartSlice = createSlice({
    name:'cart',
    initialState:intialState,
    reducers:{
        addItem: (state, action) => {          
            const { product } = action.payload;    
            
           const existingItem = state.cartItems.find((e) => e.cartID === product.cartID);

            if (existingItem) {
                 existingItem.amount += product.amount;                
            } else {
                state.cartItems.push(product);
            }            
            state.numItemInCart = state.numItemInCart+product.amount;
            state.cartTotal += product.price * product.amount;
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeItem: (state, action) => {
            const { cartID } = action.payload;
            console.log(cartID);
            
            const existingItem = state.cartItems.find((e) => e.cartID === cartID);
            if (existingItem) {
                if (existingItem.amount > 1) {
                    existingItem.amount -= 1;
                    state.numItemInCart -= 1;
                    state.cartTotal -= existingItem.price;
                } else {
                    // Remove the item from the cart if amount is 1
                    state.cartItems = state.cartItems.filter((e) => e.cartID !== cartID);
                    state.numItemInCart -= 1;
                    state.cartTotal -= existingItem.price;
                }
        
                // Update the tax and order total
                state.tax = 0.1 * state.cartTotal;
                state.orderTotal = state.cartTotal + state.shipping + state.tax;
        
                // Save the updated cart to localStorage
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        
     clearcart:(state,action)=>{
        localStorage.setItem('cart',JSON.stringify(intialState))
        return intialState;
     },
     editItem:(state,action)=>{
        const {product,amount}=action.payload;
        console.log(product,"CartID");
        console.log(amount,"amount");
        const item=state.cartItems.find((e)=> e.cartID === product);
        state.numItemInCart+=amount-item.amount;
        state.cartTotal+=item.price*(amount-item.amount);
        item.amount=amount;
        state.tax = 0.1 * state.cartTotal;
        state.orderTotal = state.cartTotal + state.shipping + state.tax;
        localStorage.setItem('cart', JSON.stringify(state));
     } ,
    
    }
})

export const {addItem,removeItem,editItem,clearcart}=cartSlice.actions;
export default cartSlice.reducer;