import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
    isMenuOpen : boolean
}
const initialState = {isMenuOpen: false} as NavigationState;


const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers:{
        toggleMenu(state){
            state.isMenuOpen = !state.isMenuOpen;
        }
    }


})

export const {toggleMenu} = navigationSlice.actions;
export default navigationSlice.reducer;