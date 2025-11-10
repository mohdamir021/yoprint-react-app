import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AnimeDetails } from "../../interfaces/search";

export default function AnimeCard(props: Partial<AnimeDetails>) {

  const {title, images} = props;

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
      // Outline
      border={"1px solid red"}
    >
      {/* Outline */}
      {/* <Box w={"160px"} bgColor={"blue"} h={"200px"} /> */}
      <Image alt={title} src={images?.jpg.image_url} w={"160px"} h={"200px"} />

      <Link to={"/show/anime-id"}>
        <Text fontSize={"14px"} _hover={{color: "orange", fontWeight: "bold"}}>{title}</Text>
      </Link>
    </VStack>
  );
}
