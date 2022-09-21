import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const FL_FAV_RT = 'rfk'

interface GithubState {
  favourites: string[]
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(FL_FAV_RT) ?? '[]')
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(FL_FAV_RT, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(f => f !== action.payload)
      localStorage.setItem(FL_FAV_RT, JSON.stringify(state.favourites))
    }
  }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer

