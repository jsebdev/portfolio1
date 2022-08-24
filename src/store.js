import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './ui/App/themeSlice';
import { menuReducer } from './ui/components/Nav/menuSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
  },
});
