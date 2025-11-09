import { Box, Stack, Text, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AnimeCard from "../components/main/AnimeCard";
import { catchAndLogError, generateArrayOfNumbers } from "../utils/helpers";
import { animeService } from "../services";
import { AnimeDetails } from "../interfaces/search";

export default function Home() {
  const [list, setList] = useState<AnimeDetails[]>([]);

  useEffect(() => {
    if(list.length === 0) {
      animeService
        .index({ page: 1, limit: 10, order_by: "start_date", sort: "desc" })
        .then((response) => {
          setList(response?.data ?? []);
        })
        .catch(catchAndLogError);
    }
  }, [list]);

  console.log(list)

  // flags
  const isEmpty = list?.length === 0;

  return (
    <Stack
      w={"full"}
      px={"10px"}
      alignItems={"center"}
      // Outline
      // bgColor={"red"}
    >
      <Wrap
        maxW={"800px"}
        justifyContent={"center"}
        gap={6}
        // Outline
        // bg={"yellow"}
      >
        {!isEmpty ? (
          list.map((num) => <AnimeCard key={`${num}_anime-card`} />)
        ) : (
          <Text>No Anime Found</Text>
        )}
      </Wrap>
    </Stack>
  );
}
