import {configureStore} from "@reduxjs/toolkit"
import headerReducer from "./Reducers/header.reducer.js"


export default configureStore({
    reducer: {
        header: headerReducer,
    },
})