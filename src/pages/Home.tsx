import { Box, Wrap } from "@chakra-ui/react";
import React from "react";
import AnimeCard from "../components/main/AnimeCard";
import { generateArrayOfNumbers } from "../utils/helpers";

export default function Home() {
  return (
    <Box>
      <Wrap justify={"center"} gap={6}>
        {generateArrayOfNumbers(9).map((num)=>(<AnimeCard key={`${num}_anime-card`} />))}
      </Wrap>
    </Box>
  );
}
