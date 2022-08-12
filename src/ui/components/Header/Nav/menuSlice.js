import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayedMenu: false,
};

export const menuSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleDisplayMenu: (state) => {
      state.displayedMenu = !state.displayedMenu;
    },
    displayMenu: (state) => {
      state.displayedMenu = true;
    },
    hideMenu: (state) => {
      state.displayedMenu = false;
    },
  },
});

export const { toggleDisplayMenu, displayMenu, hideMenu } = menuSlice.actions;

export const { reducer: menuReducer } = menuSlice;
