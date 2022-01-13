import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        pages: [
            {
                name: 'home',
                show: true,
            },
            {
                name: 'page1',
                show: false,
            },
            {
                name: 'page2',
                show: false,
            },
        ],
        query: Promise,
    },
    reducers: {
        togglePage(state, action) {
            state.pages.forEach(page => page.show = false);
            state.pages[action.payload].show = true;
        },
        setQuery(state, action){
            state.query = action.payload;
        },
    },
})

export const {togglePage, setQuery} = counterSlice.actions
export default counterSlice.reducer