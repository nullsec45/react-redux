import {createSlice} from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"product",
    initialState:{
        title:"Minyak Wangi",
        price:"100.000"
    },
    reducers:{
        update:(state, action) =>{
            state.title=action.payload.title;
            state.price=action.payload.price;
        }
    }
});

export const {update}=productSlice.actions;
export default productSlice.reducer;