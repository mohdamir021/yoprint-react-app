import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './features/favoriteSlice';

export const store = configureStore({
  reducer: {
    favourite: favouriteReducer
  },
});

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * Might need to configure this to reduce complexity, 
 * for now, this is the implementation I should use as example:
 * 
 * import { useSelector, useDispatch } from 'react-redux';
 * import { RootState, AppDispatch } from './store/store';
 * import { addFavourite } from './
 * 
 * const favourite = useSelect((state: RootState) => state.favourite.value)
 * const dispatch = useDispatch<AppDispatch>();
 */