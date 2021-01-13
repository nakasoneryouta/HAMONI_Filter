import { AsyncStorage } from 'react-native';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from "redux-persist";

import tabStore from "./TabStore";


const rootReducer = combineReducers({
	tabStore: tabStore.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false
	})
})

export type AppDispatch = typeof store.dispatch

export default store
export const persistor = persistStore(store);