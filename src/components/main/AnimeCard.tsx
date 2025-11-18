import {
  Box,
  HStack,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AnimeDetails } from "../../interfaces/search";
import { Tooltip } from "../ui/tooltip";
import FavoriteButton from "./FavoriteButton";
import useFavourite from "../../hooks/useFavourite";
import SimpleDialog from "./SimpleDialog";

interface AnimeCardProps {
  data: Partial<AnimeDetails>;
  toggleFavouriteWithDialog?: boolean;
}

export default function AnimeCard(props: AnimeCardProps) {
  const { data, toggleFavouriteWithDialog } = props;

  // favourites
  const { isFavourite, toggleFavorite } = useFavourite(data);
  const favDisclosure = useDisclosure();

  const { title, images, mal_id } = data;

  // transform
  const displayTitle = `${String(title ?? "").substring(0, 48)}${
    String(title ?? "").length > 48 ? "..." : ""
  }`;

  return (
    <VStack
      w={"full"}
      maxW={"180px"}
      minH={"200px"}
      p={1}
      rounded={"5px"}
      borderRadius={"5px"}
      justify={"start"}
      align={"center"}
      textAlign={"center"}
      border={"1px solid"}
      borderColor={"#595959ff"}
      position={"relative"}
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

      <Box h={"30px"} />
      <HStack position={"absolute"} top={0} right={0}>
        <FavoriteButton
          size={"sm"}
          bg={"black"}
          _hover={{ bg: "darkgray" }}
          favouriteValue={isFavourite}
          onClick={
            toggleFavouriteWithDialog ? favDisclosure.onOpen : toggleFavorite
          }
        />
      </HStack>

      <SimpleDialog
        disclosure={favDisclosure}
        title={`${isFavourite ? "Unfavorite" : "Favorite"} Anime?`}
        description={`${
          isFavourite ? "Remove from" : "Add to"
        } favorite anime list?`}
        onConfirm={() => {
          toggleFavorite();
        }}
      />
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
