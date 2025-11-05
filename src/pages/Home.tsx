import { Box, Stack, Wrap } from "@chakra-ui/react";
import React from "react";
import AnimeCard from "../components/main/AnimeCard";
import { generateArrayOfNumbers } from "../utils/helpers";

export default function Home() {
  return (
    <Stack
      w={"full"}
      px={"10px"}
      alignItems={"center"}
      // Outline
      // bgColor={"red"}
    >
      <Wrap
        maxW={"800px"}
        justifyContent={"center"}
        gap={6}
        // Outline
        // bg={"yellow"}
      >
        {generateArrayOfNumbers(9).map((num) => (
          <AnimeCard key={`${num}_anime-card`} />
        ))}
      </Wrap>
    </Stack>
  );
}
