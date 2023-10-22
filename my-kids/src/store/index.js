import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './themeSlice';
import { fetchUser, userSlice } from './userSlice';
import { contentSlice, fetchContent } from './contentSlice';
import { resetPasswordSlice } from './resertPasswordSlice';

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        user: userSlice.reducer,
        content: contentSlice.reducer,
        resetPassword: resetPasswordSlice.reducer,
        [fetchUser.reducerPath]: fetchUser.reducer,
        [fetchContent.reducerPath]: fetchContent.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchUser.middleware)
            .concat(fetchContent.middleware),
});
