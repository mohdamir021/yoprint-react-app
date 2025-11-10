import { Box, Pagination, Stack, Text, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AnimeCard from "../components/main/AnimeCard";
import { catchAndLogError, generateArrayOfNumbers } from "../utils/helpers";
import { animeService } from "../services";
import { AnimeDetails } from "../interfaces/search";
import SearchPagination from "../components/main/SearchPagination";
import useStatuses from "../hooks/useStatuses";

export default function Home() {
  const { isSuccess, isLoading, isError, isEmpty, setSuccess, setEmpty, setLoading, catchError } =
    useStatuses();
  const [list, setList] = useState<AnimeDetails[]>([]);

  useEffect(() => {
    if (isLoading && list.length === 0) {
      animeService
        .index({ page: 1, limit: 12, order_by: "start_date", sort: "desc" })
        .then((response) => {
          setList(response?.data ?? []);

          // Status Update
          setSuccess(true);
          setLoading(false);
          setEmpty(response?.data.length === 0)
          
        })
        .catch(catchError);
    }
  }, [list, isSuccess, isLoading]);

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
        mb={6}
        // Outline
        // bg={"yellow"}
      >
        {isLoading && <Text>Is Loading</Text>}
        {isError && <Text>Error</Text>}
        {isSuccess &&
          !isEmpty &&
          list.map((data, index) => (
            <AnimeCard key={`${index}_${data.mal_id}_anime-card`} {...data} />
          ))}
        {isEmpty && <Text>No Anime Found</Text>}
      </Wrap>
      {/* Pagination */}
      {!isEmpty && <SearchPagination />}
    </Stack>
  );
}
