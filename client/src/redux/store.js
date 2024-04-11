import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice.js";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from "redux-persist/es/persistStore.js";

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
    key: 'root',
    version: 1,//by default -1 if not mentioned
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  //reducer: { user: userReducer },
  reducer: persistedReducer ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor =  persistStore(store);