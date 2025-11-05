import { Box, Flex, Heading, Tag, Text, Wrap } from "@chakra-ui/react";
import { lorem } from "../../libs/lorem";
import { generateArrayOfNumbers } from "../../utils/helpers";

export default function AnimeItemList() {
  return (
    <Flex
      w={"full"}
      maxW={"1000px"}
      h={"300px"}
      rounded={"8px"}
      borderRadius={"8px"}
      gap={2}
      px={4}
      alignItems={"center"}
      // Outline
      border={"1px solid red"}
    >
      {/* Anime Source Image */}
      <Box
        w={"230px"}
        h={"280px"}
        // Outline
        bg="red"
      ></Box>

      {/* Anime Details */}
      <Box
        h={"full"}
        w={"full"}
        py={2}
        px={3}
        // Outline
        border={"1px solid yellow"}
      >
        <Heading my={1}>Anime Title</Heading>

        <Text>{lorem.generateParagraphs(1)}</Text>

        <Wrap mt={3}>
          {generateArrayOfNumbers(20).map((n) => (
            <Tag.Root key={`${n}-anime-tag`}>
              <Tag.Label>Anime</Tag.Label>
            </Tag.Root>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}
