import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/user';
import { carrerasApi } from 'features/carrerasData';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import solicitudReducer from 'features/solicitud';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [carrerasApi.reducerPath]: carrerasApi.reducer,
        solicitudHandler: solicitudReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carrerasApi.middleware),
    devTools: process.env.NODE_ENV !=='production',
});

setupListeners(store.dispatch);




