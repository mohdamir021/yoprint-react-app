import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
      <Box w={"160px"} bgColor={"blue"} h={"200px"} />

      <Link to={"/show/anime-id"}>
        <Text _hover={{color: "orange", fontWeight: "bold"}}>Anime Name</Text>
      </Link>
    </VStack>
  );
}
