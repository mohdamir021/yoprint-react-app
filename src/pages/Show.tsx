import { Box, Flex, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { lorem } from "../libs/lorem";

export default function Show() {
  // consoles
  console.log("Show");

  return (
    <VStack w={"full"} h={"full"} px={"6"} py={"4"}>

      {/* Upper Part */}
      <Heading size={"3xl"}>Anime Name</Heading>

      <HStack align={"start"} w={"full"} maxW={"900px"} gap={"30px"}>
        <Box
          minW={"260px"}
          minH={"320px"}
          // outline
          border={"1px solid yellow"}
        >
          <Text>Picture</Text>

        </Box>

        <Stack
          h={"full"}
          w={"full"}
          p={2}
          // Outline
          border={"1px solid orange"}
        >
          <Text>{lorem.generateParagraphs(1)}</Text>
          <Text>{lorem.generateParagraphs(1)}</Text>
          <Text>{lorem.generateParagraphs(1)}</Text>
        </Stack>
      </HStack>
    </VStack>
  );
}
