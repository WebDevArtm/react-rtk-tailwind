import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { gitHubAPI } from './github/github.api';
import { githubReducer } from './github/github.slice';

export const store = configureStore({
  reducer: {
    [gitHubAPI.reducerPath]: gitHubAPI.reducer,
    github: githubReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitHubAPI.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
