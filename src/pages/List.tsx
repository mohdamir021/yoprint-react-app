import { Box, Flex, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { generateArrayOfNumbers } from "../utils/helpers";
import AnimeItemList from "../components/main/AnimeItemList";

export default function List() {
  return (
    <VStack w={"full"} gap={4}>
      {generateArrayOfNumbers(5).map((value) => (
        <AnimeItemList key={`${value}-anime-item-list`} />
      ))}
    </VStack>
  );
}
