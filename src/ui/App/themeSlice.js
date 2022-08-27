import { createSlice } from '@reduxjs/toolkit';
import { themesNames } from '../helpers/themes';

const initialState = {
  value: themesNames.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value =
        state.value === themesNames.light
          ? themesNames.dark
          : themesNames.light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const { reducer: themeReducer } = themeSlice;
