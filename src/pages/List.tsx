import {
  Box,
  Button,
  ButtonProps,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import AnimeItemList from "../components/main/AnimeItemList";
import { useAppSelector } from "../store/store";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimeCard from "../components/main/AnimeCard";
import { IoGrid } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";

export default function List() {
  const favourites = useAppSelector((state) => state.favourite.favourites);
  const [view, setView] = useState<"grid" | "list">("list");
  const activeViewProps: ButtonProps = {
    bgColor: "black",
  };

  const isEmpty = favourites.length === 0;

  return (
    <VStack w={"full"} gap={4}>
      <Heading size={"2xl"}>Favorite Anime</Heading>

      <HStack px={2} py={1} bgColor={"gray.800"} borderRadius={"4px"}>
        <Button
          variant={"ghost"}
          onClick={() => setView("grid")}
          {...(view === "grid" ? activeViewProps : {})}
        >
          <IoGrid /> Grid
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => setView("list")}
          {...(view === "list" ? activeViewProps : {})}
        >
          <TbListDetails /> List
        </Button>
      </HStack>

      {isEmpty ? (
        <React.Fragment>
          <Text fontSize={"md"}>You have no favorites listed</Text>
          <Link to={"/"}>
            <Button>Back to Home</Button>
          </Link>
        </React.Fragment>
      ) : view === "list" ? (
        favourites.map((data, index) => (
          <AnimeItemList
            key={`${index}_${data.mal_id}_anime-item-list`}
            data={data}
            toggleFavouriteWithDialog
          />
        ))
      ) : (
        <Wrap
          w={"full"}
          maxW={"800px"}
          justifyContent={"center"}
          gap={6}
          mb={6}
        >
          {favourites.map((data, index) => (
            <AnimeCard
              key={`${index}_${data.mal_id}_anime-card`}
              data={data}
              toggleFavouriteWithDialog
            />
          ))}
        </Wrap>
      )}
    </VStack>
  );
}
