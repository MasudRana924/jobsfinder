import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import applyJobSlice from "./applyJob/applyJobSlice";
import jobDetailsSlice from "./jobs/jobDetailsSlice";
import jobsSlice from "./jobs/jobsSlice";
import authSlice from "./reducers/auth/authSlice";
import registerSlice from './reducers/auth/registerSlice';
import employerPendingJobsSlice  from "./employer/employerJobsSlice";
const persistConfig = {
  key: "authentication",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authSlice);
const combinedReducer = {
  user: persistedReducer,
  register: registerSlice,
  jobs:jobsSlice,
  jobDetails:jobDetailsSlice,
  apply:applyJobSlice,
  pendingJob:employerPendingJobsSlice
};
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: true,
});
export const persistor = persistStore(store);