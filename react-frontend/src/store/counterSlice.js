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
                name: 'addView',
                show: false,
            },
            {
                name: 'updateView',
                show: false,
            }
        ],
        queryType: 'Make',
        queryInput: '',
        latestCar: Object,
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
        },
        setLatestCar(state, action){
            state.latestCar = action.payload;
        }
    },
})

export const {togglePage, setQueryType, setQueryInput, setLatestCar} = counterSlice.actions
export default counterSlice.reducer