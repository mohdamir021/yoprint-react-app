import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { AnimeDetails } from "../../interfaces/search";
import { Link } from "react-router-dom";

export default function AnimeItemList(props: Partial<AnimeDetails>) {
  const { title, images, synopsis, genres, mal_id } = props;

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
      <Link to={`/show/${mal_id}`}>
        <Box pt={5}>
          <Image alt={title} src={images?.webp.image_url} w={"230px"} />
        </Box>
      </Link>

      {/* Anime Details */}
      <Box h={"full"} w={"full"} py={2} px={3}>
        <Link to={`/show/${mal_id}`}>
          <Heading my={1} _hover={{ color: "orange", fontWeight: "bold" }}>
            {title}
          </Heading>
        </Link>

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

export function LoadingItemList() {
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
      pb={4}
      alignItems={"start"}
      border={"1px solid"}
      borderColor={"darkgray"}
      // Outline
    >
      {/* Anime Source Image */}
      <Box pt={5}>
        <Skeleton w={"200px"} h={"280px"} />
      </Box>

      {/* Anime Details */}
      <Box h={"full"} w={"full"} py={2} px={3}>
        <Skeleton mt={3} height={8} w={250} />

        <Box my={4}>
          <SkeletonText noOfLines={4} />
        </Box>

        <Wrap mt={3}>
          <Skeleton w={12} h={"20px"} />
          <Skeleton w={12} />
        </Wrap>
      </Box>
    </Flex>
  );
}
