import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isDark: false,
    version: "0.0.1",

};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        lightMode(state) {
            state.isDark = false;
        },
        darkMode(state) {
            state.isDark = true;
        },
        setVersion(state, action) {
            state.version = action.payload;
        }
    },
});

export const { lightMode, darkMode, setVersion } = themeSlice.actions;
