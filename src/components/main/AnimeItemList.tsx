import { Box, Flex, Heading, Image, Tag, Text, Wrap } from "@chakra-ui/react";
import { AnimeDetails } from "../../interfaces/search";

export default function AnimeItemList(props: Partial<AnimeDetails>) {
  const { title, images, synopsis, genres } = props;

  return (
    <Flex
      w={"full"}
      maxW={"1000px"}
      rounded={"8px"}
      borderRadius={"8px"}
      gap={2}
      my={2}
      px={4}
      py={2}
      alignItems={"start"}
      border={"1px solid"}
      borderColor={"darkgray"}
      // Outline
    >
      {/* Anime Source Image */}
      <Box pt={5}>
        <Image alt={title} src={images?.webp.image_url} w={"230px"}/>
      </Box>

      {/* Anime Details */}
      <Box
        h={"full"}
        w={"full"}
        py={2}
        px={3}
      >
        <Heading my={1}>{title}</Heading>

        <Text>{synopsis}</Text>

        <Wrap mt={3}>
          {genres?.map((genre) => (
            <Tag.Root key={`${genre.mal_id}-anime-tag`}>
              <Tag.Label>{genre.name}</Tag.Label>
            </Tag.Root>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}
