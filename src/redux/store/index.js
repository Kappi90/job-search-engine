import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite";
import jobReducer from "../reducers/job";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    // elenco delle trasformazioni (plugin) applicabili a redux-persist
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // questo risolve l'errore del non-serializable value
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // <-- lo spegne
    }),
});

export const persistor = persistStore(store);
