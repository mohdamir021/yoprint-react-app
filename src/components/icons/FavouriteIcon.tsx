import { Box, Circle, Float } from "@chakra-ui/react";
import React from "react";
import { MdBookmarks } from "react-icons/md";
import { useAppSelector } from "../../store/store";

export default function FavouriteIcon() {
  const favourites = useAppSelector((state) => state.favourite.favourites);
  const total = favourites.length;

  return (
    <Box pos={"relative"}>
      <Float>
        {total > 0 && (
          <Circle size="5" bg="red" color="white">
            {total}
          </Circle>
        )}
      </Float>
      <MdBookmarks />
    </Box>
  );
}
