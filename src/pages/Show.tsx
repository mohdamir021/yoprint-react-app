import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Separator,
  Skeleton,
  SkeletonText,
  Spacer,
  Stack,
  Table,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { lorem } from "../libs/lorem";
import { useParams, useSearchParams } from "react-router-dom";
import { animeService } from "../services";
import useStatuses from "../hooks/useStatuses";
import { AnimeDetails, AnimeFullDetails } from "../interfaces/search";
import { toCapitalize } from "../utils/helpers";
import YouTubeEmbed from "../components/main/YouTubeEmbed";
import SimpleAlert from "../components/main/SimpleAlert";

export default function Show() {
  // params
  const params = useParams();

  // states
  const status = useStatuses();
  const [anime, setAnime] = useState<Partial<AnimeFullDetails> | undefined>({});

  // API Fetch
  useEffect(() => {
    const id = params?.id;
    if (id) {
      animeService
        .show(id, true)
        .then((response) => {
          // set data
          setAnime(response?.data);
          // status update
          status.setSuccess(true);
          status.setLoading(false);
        })
        .catch(status.catchError);
    }
  }, [params.id]);

  // Display Data Constants
  const info = [
    ["Source", anime?.source],
    ["Genres", anime?.genres?.map((genre) => genre.name).join(", ")],
    ["Themes", anime?.themes?.map((theme) => theme.name).join(", ")],
    [
      "Demographics",
      anime?.demographics?.map((demographic) => demographic.name).join(", "),
    ],
    ["Rating", anime?.rating],
  ];

  const broadcastInfo = [
    ["Type", anime?.type],
    ["Status", anime?.status],
    ["Season", toCapitalize(anime?.season)],
    ["Year", anime?.year],
    ["Airing", anime?.aired?.string],
    ["Episodes", anime?.episodes],
    ["Duration", anime?.duration],
    ["Broadcast", anime?.broadcast?.string],
    [
      "Streaming",
      anime?.streaming?.map((streaming) => streaming?.name).join(", "),
    ],
  ];

  const ranking = [
    ["Ranked", anime?.rank],
    ["Popularity", anime?.popularity],
    ["Members", anime?.members],
  ];

  return (
    <VStack w={"full"} h={"full"} px={"6"} py={"4"}>
      {/* Title */}
      {status.isLoading && <Skeleton w={"400px"} h={"40px"} />}
      <Heading size={"3xl"} mb={3}>
        {status.isSuccess && anime?.title}
        {status.isError && "Error Fetching Details"}
      </Heading>

      {status.isError && (
        <Box w={"full"} maxW={"1200px"}>
          <SimpleAlert
            status={"error"}
            header="Error"
            description="Failed to fetch information ..."
          />
        </Box>
      )}

      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "start" }}
        w={"full"}
        maxW={"1200px"}
        gap={"30px"}
      >
        <Stack w={"full"} maxW={"360px"} minH={"320px"} alignItems={"center"}>
          {status.isLoading && <Skeleton w={"300px"} h={"400px"} />}
          {status.isSuccess && (
            <Image
              alt={anime?.title}
              src={anime?.images?.webp?.large_image_url}
              maxW={"300px"}
            />
          )}

          <Stack mt={3} px={2} w={"full"}>
            {/* Block */}
            {status.isLoading && <Skeleton h={"25px"} />}
            {status.isSuccess && (
              <Heading size={"md"}>Alternative Titles</Heading>
            )}
            <Separator />
            {status.isLoading && (
              <React.Fragment>
                <Skeleton h={"20px"} />
                <Skeleton h={"20px"} />
              </React.Fragment>
            )}
            {anime?.titles?.map((title, index) => (
              <Text
                key={`${index}-title`}
                fontSize={"small"}
                letterSpacing={"wide"}
              >
                {title.title} ({title.type})
              </Text>
            ))}
            <Spacer h={"20px"} />
            {/* End of Block */}

            {/* Block */}
            {status.isSuccess && (
              <React.Fragment>
                <Heading size={"md"}>Information</Heading>
                <Separator />
                <Table.Root
                  fontSize={"small"}
                  size="sm"
                  variant={"line"}
                  unstyled
                >
                  <Table.Body>
                    {info.map(([label, value], index) => (
                      <Table.Row key={`${index}-${label}`}>
                        <Table.Cell py={1}>{label}</Table.Cell>
                        <Table.Cell>
                          {value === "" ? "-NA-" : value ?? "-NA-"}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
                <Spacer h={"20px"} />
              </React.Fragment>
            )}
            {/* End of Block */}
          </Stack>
        </Stack>

        <Stack h={{ base: "fit-content", lg: "full" }} w={"full"} p={2}>
          {/* Block */}
          {status.isLoading && <Skeleton w={"200px"} h={"36px"} />}
          {status.isSuccess && <Heading size={"xl"}>Rankings</Heading>}
          <Separator />
          <HStack w={"full"}>
            {status.isLoading && (
              <VStack minW={"100px"} ml={3}>
                <Skeleton w={"100px"} h={"30px"} />
                <Skeleton w={"100px"} h={"25px"} />
                <Skeleton w={"100px"} h={"22px"} />
              </VStack>
            )}
            {status.isSuccess && (
              <VStack minW={"100px"} ml={3}>
                <Text
                  px={4}
                  py={1}
                  bgColor={"darkblue"}
                  fontSize={"md"}
                  fontWeight={600}
                >
                  Score
                </Text>
                <Text fontSize={"lg"} fontWeight={700}>
                  {anime?.score ?? "-NA-"}
                </Text>
                <Text fontSize={"md"} fontWeight={400}>
                  {anime?.scored_by ?? "0"} users
                </Text>
              </VStack>
            )}
            <Separator mx={4} h={"full"} orientation={"vertical"} />

            {status.isLoading && <Skeleton w={"400px"} h={"40px"} />}

            {status.isSuccess && (
              <Wrap>
                {ranking?.map(([label, value], index) => (
                  <Text key={`${index}-${label}`} fontSize={"xl"} mr={3}>
                    {label} <span style={{ fontWeight: 600 }}>#{value}</span>
                  </Text>
                ))}
              </Wrap>
            )}
          </HStack>
          <Spacer h={"20px"} />

          {status.isSuccess && (
            <Box mb={6} w={"full"} h={"fit-content"}>
              <Heading my={4}>Trailer</Heading>
              {anime?.trailer?.embed_url ? (
                <YouTubeEmbed videoUrl={anime?.trailer?.embed_url} />
              ) : (
                <Text fontSize={"md"}>No trailer available</Text>
              )}
            </Box>
          )}

          {/* Block */}
          {status.isLoading && <Skeleton w={"200px"} h={"36px"} />}
          {status.isSuccess && <Heading size={"xl"}>Sysnopsis</Heading>}
          <Separator />
          {status.isLoading && (
            <SkeletonText w={"full"} h={"20px"} noOfLines={5} />
          )}
          {status.isSuccess && <Text>{anime?.synopsis}</Text>}
          <Spacer h={"20px"} />
          {/* End of Block */}

          {/* Block */}
          {status.isSuccess && (
            <React.Fragment>
              <Heading size={"xl"}>Broadcast Information</Heading>
              <Separator />
              <Table.Root size="md">
                <Table.Body>
                  {broadcastInfo.map(([label, value], index) => (
                    <Table.Row key={`${index}-${label}`}>
                      <Table.Cell w={"200px"}>{label}</Table.Cell>
                      <Table.Cell>
                        {value === "" ? "-NA-" : value ?? "-NA-"}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
              <Spacer h={"20px"} />
            </React.Fragment>
          )}
          {/* End of Block */}
        </Stack>
      </Stack>
    </VStack>
  );
}
