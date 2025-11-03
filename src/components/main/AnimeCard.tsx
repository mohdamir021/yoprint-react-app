import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function AnimeCard() {
  return (
    <VStack
      w={"full"}
      maxW={"180px"}
      h={"260px"}
      p={1}
      rounded={"5px"}
      borderRadius={"5px"}
      justifyContent={"center"}
      // Outline
      border={"1px solid red"}
    >
      {/* Outline */}
      <Box w={"160px"} bgColor={"blue"} h={"200px"}/>

      <Text>Anime Name</Text>
    </VStack>
  );
}
