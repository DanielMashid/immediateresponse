import {createSlice} from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: "header",
    initialState:{
        title: "דף הבית"
    },
    reducers: {
        setTitle:(state, action)=> {
            state.title = action.payload
        }
    }
})

export const {setTitle} = headerSlice.actions

export default headerSlice.reducer