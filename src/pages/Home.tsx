import {
  Heading,
  HStack,
  Input,
  InputGroup,
  Stack,
  Tabs,
  Wrap,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import AnimeCard, { LoadingCard } from "../components/main/AnimeCard";
import {
  debounce,
  generateArrayOfNumbers,
  scrollTo,
} from "../utils/helpers";
import { animeService } from "../services";
import { AnimeDetails, AnimeSearchData } from "../interfaces/search";
import SearchPagination from "../components/main/SearchPagination";
import useStatuses from "../hooks/useStatuses";
import { useRecord } from "../hooks/useRecord";
import { AnimeIndexParams, AnimeStatus } from "../interfaces";
import { CURRENT_YEAR } from "../libs/moment";
import { AppDispatch, useAppDispatch, useAppSelector } from "../store/store";
import { LuSearch } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { IoGrid } from "react-icons/io5";
import AnimeItemList from "../components/main/AnimeItemList";
import SimpleAlert from "../components/main/SimpleAlert";

// constants
const HEADINGS: Record<AnimeStatus | "", string> = {
  "": "All Anime",
  airing: "Currently Airing " + CURRENT_YEAR,
  complete: "Completed Anime",
  upcoming: "Upcoming Anime",
};

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
  const [pagination, setPagination] = useState<
    Partial<AnimeSearchData["pagination"]>
  >({});

  const { set: setParams, ...params } = useRecord<AnimeIndexParams>({
    q: "",
    page: 1,
    limit: 12,
    order_by: "start_date",
    sort: "desc",
    status: "airing",
    sfw: 1,
  });
  const { q, page, status } = params;

  // handler
  const handlePage = (page: number) => {
    setParams({ page });
    scrollTo("top-content");
  };
  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setParams({ q: e.target.value, page: 1 });
  }, 500);

  useEffect(() => {
    if (isLoading || isReFetching) {
      animeService
        .index(params)
        .then((response) => {
          setList(response?.data ?? []);
          setPagination(response?.pagination ?? {});

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
  }, [page, q, status]);

  return (
    <Stack w={"full"} px={"10px"} alignItems={"center"}>
      <Heading my={3} size={"3xl"} textAlign={"center"}>
        {HEADINGS[status as keyof typeof HEADINGS]}
      </Heading>

      {/* Search */}

      <Tabs.Root
        variant={"enclosed"}
        lazyMount
        unmountOnExit
        defaultValue="tab-1"
        w={"full"}
        maxW={"800px"}
      >
        {/* Filter Line 1 */}
        <HStack
          id="top-content"
          w={"full"}
          my={2}
          justifyContent={"space-between"}
        >
          <InputGroup
            w={"full"}
            maxW={"400px"}
            flex={"1"}
            startElement={<LuSearch />}
          >
            <Input
              w={"full"}
              placeholder="Search anime"
              onChange={handleSearch}
            />
          </InputGroup>
          <Tabs.List>
            <Tabs.Trigger value="tab-1">
              <IoGrid />
            </Tabs.Trigger>
            <Tabs.Trigger value="tab-2">
              <TbListDetails />
            </Tabs.Trigger>
          </Tabs.List>
        </HStack>

        {/* Filter Line 2 */}
        <HStack w={"full"} my={2} justifyContent={"space-between"}>
          <Tabs.Root
            variant={"enclosed"}
            size={"sm"}
            fitted
            w={"full"}
            value={status}
            onValueChange={(tab) =>
              setParams({ status: tab.value as AnimeStatus, page: 1 })
            }
          >
            <Tabs.List>
              <Tabs.Trigger px={2} value="">
                All
              </Tabs.Trigger>
              <Tabs.Trigger value="airing">Airing</Tabs.Trigger>
              <Tabs.Trigger value="complete">Complete</Tabs.Trigger>
              <Tabs.Trigger value="upcoming">Upcoming</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </HStack>

        {/* Body Content */}
        <Tabs.Content value="tab-1">
          <Wrap maxW={"800px"} justifyContent={"center"} gap={6} mb={6}>
            {isLoading && <LoadingGrids />}
            {isError && (
              <SimpleAlert
                status={"error"}
                header="Error"
                description="Failed to fetch the data..."
              />
            )}
            {isEmpty && (
              <SimpleAlert
                status={"neutral"}
                header="Empty"
                description="There's no anime list available..."
              />
            )}
            {isSuccess &&
              !isEmpty &&
              list.map((data, index) => (
                <AnimeCard
                  key={`${index}_${data.mal_id}_anime-card`}
                  {...data}
                />
              ))}
          </Wrap>
        </Tabs.Content>
        <Tabs.Content value="tab-2">
          {list.map((data, index) => (
            <AnimeItemList
              key={`${index}_${data.mal_id}_anime-item-list`}
              {...data}
            />
          ))}
        </Tabs.Content>
      </Tabs.Root>
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

// Extra Components
const LoadingGrids = () => {
  return generateArrayOfNumbers(8).map((n) => (
    <LoadingCard key={`${n}-loading-card`} />
  ));
};
