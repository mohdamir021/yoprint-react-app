import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './features/favoriteSlice';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
  },
});

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Shortcut
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
/**
 * Above shortcut is used to simplify the following
 * 
 * import { useSelector, useDispatch } from 'react-redux';
 * import { RootState, AppDispatch } from './store/store';
 * import { addFavourite } from './'
 * 
 * const favourite = useSelect((state: RootState) => state.favourite.value)
 * const dispatch = useDispatch<AppDispatch>();
 */