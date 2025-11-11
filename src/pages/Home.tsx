import { Box, Heading, Pagination, PaginationPageChangeDetails, Stack, Text, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AnimeCard from "../components/main/AnimeCard";
import { catchAndLogError, generateArrayOfNumbers } from "../utils/helpers";
import { animeService } from "../services";
import { AnimeDetails, AnimeSearchData } from "../interfaces/search";
import SearchPagination from "../components/main/SearchPagination";
import useStatuses from "../hooks/useStatuses";
import { useRecord } from "../hooks/useRecord";
import { AnimeIndexParams } from "../interfaces";
import { CURRENT_YEAR } from "../libs/moment";

export default function Home() {
  const {
    isSuccess,
    isLoading,
    isError,
    isEmpty,
    isReFetching,
    setSuccess,
    setEmpty,
    setLoading,
    setRefetching,
    catchError,
  } = useStatuses();
  const [list, setList] = useState<AnimeDetails[]>([]);
  const [pagination, setPagination] = useState<Partial<AnimeSearchData["pagination"]>>({})

  const {
    set: setParams,
    search,
    page,
  } = useRecord<AnimeIndexParams>({
    search: "",
    page: 1,
  });

  const handlePage = (page: number) => setParams({ page })

  useEffect(() => {
    if (isLoading || isReFetching) {
      animeService
        .index({
          search,
          page,
          limit: 12,
          order_by: "start_date",
          sort: "desc",
          sfw: 1,
          status: "airing"
        })
        .then((response) => {
          setList(response?.data ?? []);
          setPagination(response?.pagination ?? {})

          // Status Update
          setSuccess(true);
          setLoading(false);
          setRefetching(false);
          setEmpty(response?.data.length === 0);
        })
        .catch(catchError);
    }
  }, [list, isSuccess, isLoading, isReFetching]);

  useEffect(() => {
    setRefetching(true);
  }, [page]);

  return (
    <Stack
      w={"full"}
      px={"10px"}
      alignItems={"center"}
      // Outline
      // bgColor={"red"}
    >
      <Heading my={4} size={"3xl"}>Currently Airing {CURRENT_YEAR}</Heading>

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
      {!isEmpty && (
        <SearchPagination
          page={page}
          pageSize={12}
          lastPage={pagination?.last_visible_page ?? 1}
          count={pagination?.items?.total ?? 0}
          handlePage={handlePage}
        />
      )}
    </Stack>
  );
}
