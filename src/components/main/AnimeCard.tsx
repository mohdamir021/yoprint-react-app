import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AnimeDetails } from "../../interfaces/search";
import { Tooltip } from "../ui/tooltip";

export default function AnimeCard(props: Partial<AnimeDetails>) {
  const { title, images } = props;

  // transform
  const displayTitle = `${String(title ?? "").substring(0, 48)}${
    String(title ?? "").length > 0 ? "..." : ""
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
      // Outline
    >
      {/* Outline */}
      {/* <Box w={"160px"} bgColor={"blue"} h={"200px"} /> */}
      <Image alt={title} src={images?.jpg.image_url} w={"160px"} h={"200px"} />
      
      <Link to={"/show/anime-id"}>
      <Tooltip content={title} contentProps={{css: { bg: "black", color: "orange", fontWeight: "bold"}}}>
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
