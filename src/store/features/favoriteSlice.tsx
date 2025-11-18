import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnimeDetails } from "../../interfaces/search";

export interface Favourite {
  id: string;
}

export interface FavouriteState {
  favourites: AnimeDetails[];
}

const initialState: FavouriteState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<AnimeDetails>) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFavourite: (state, action: PayloadAction<number | undefined>) => {
      state.favourites = [
        ...state.favourites?.filter((fav) => fav.mal_id !== action.payload),
      ];
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
