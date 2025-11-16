import {
  Box,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AnimeDetails } from "../../interfaces/search";
import { Tooltip } from "../ui/tooltip";

export default function AnimeCard(props: Partial<AnimeDetails>) {
  const { title, images, mal_id } = props;

  // transform
  const displayTitle = `${String(title ?? "").substring(0, 48)}${
    String(title ?? "").length > 48 ? "..." : ""
  }`;

  return (
    <VStack
      w={"full"}
      maxW={"180px"}
      h={"280px"}
      p={1}
      rounded={"5px"}
      borderRadius={"5px"}
      justify={"start"}
      align={"center"}
      textAlign={"center"}
      border={"1px solid"}
      borderColor={"#595959ff"}
    >
      <Link to={`/show/${mal_id}`}>
        <Image
          alt={title}
          src={images?.webp.image_url}
          w={"160px"}
          h={"200px"}
        />
      </Link>

      <Link to={`/show/${mal_id}`}>
        <Tooltip
          content={title}
          contentProps={{
            css: { bg: "black", color: "orange", fontWeight: "bold" },
          }}
        >
          <Text
            fontSize={"14px"}
            _hover={{ color: "orange", fontWeight: "bold" }}
          >
            {displayTitle}
          </Text>
        </Tooltip>
      </Link>
    </VStack>
  );
}

export function LoadingCard() {
  return (
    <VStack
      w={"full"}
      maxW={"180px"}
      h={"280px"}
      p={1}
      rounded={"5px"}
      borderRadius={"5px"}
      justify={"center"}
      align={"center"}
      textAlign={"center"}
      border={"1px solid"}
      borderColor={"#595959ff"}
    >
      <Skeleton w={"160px"} h={"200px"} />

      <SkeletonText fontSize={"14px"} noOfLines={2} />
    </VStack>
  );
}
