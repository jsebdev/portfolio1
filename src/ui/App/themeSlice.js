import { createSlice } from '@reduxjs/toolkit';
import { lightTheme, darkTheme, themesNames } from '../helpers/themes';

const initialState = {
  value: lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value =
        state.value.name === themesNames.light ? darkTheme : lightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const { reducer: themeReducer } = themeSlice;
