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
                name: 'queryView',
                show: false,
            },
            {
                name: 'page2',
                show: false,
            },
        ],
        queryType: 'Make',
        queryInput: ''
    },
    reducers: {
        togglePage(state, action) {
            state.pages.forEach(page => page.show = false);
            state.pages[action.payload].show = true;
        },
        setQueryType(state, action) {
            state.queryType = action.payload;
        },
        setQueryInput(state, action){
            state.queryInput = action.payload;
        }
    },
})

export const {togglePage, setQueryType, setQueryInput} = counterSlice.actions
export default counterSlice.reducer