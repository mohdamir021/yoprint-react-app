import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { AnimeDetails } from "../interfaces/search";
import { addFavourite, removeFavourite } from "../store/features/favoriteSlice";
import { useDisclosure } from "@chakra-ui/react";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export default function useFavourite(anime: Partial<AnimeDetails>) {
  const { mal_id } = anime;
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const favourites = useAppSelector((state) => state.favourite.favourites);
  const findFavourite = (id: number | undefined) =>
    favourites.find((fav) => fav.mal_id === id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mal_id) {
      setIsFavourite(Boolean(findFavourite(mal_id)));
    }
  }, [mal_id]);

  const toggleFavorite = () => {
    const hasFavourited = Boolean(findFavourite(mal_id));
    if (hasFavourited) {
      setIsFavourite(false);
      dispatch(removeFavourite(mal_id));
    } else {
      setIsFavourite(true);
      dispatch(addFavourite(anime as AnimeDetails));
    }
  };

  return {
    isFavourite,
    setIsFavourite,
    findFavourite,
    toggleFavorite
  };
}