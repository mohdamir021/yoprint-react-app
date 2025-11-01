import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Favourite {
  id: string;
}

export interface FavouriteState {
  favourites: Favourite[];
}

const initialState: FavouriteState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Favourite>) => {
      state.favourites = [...state.favourites, action.payload];
    },
  },
});

export const { addFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
