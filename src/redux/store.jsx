import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from './constactSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { FilterSlice } from './filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  ContactsSlice.reducer
);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: FilterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
