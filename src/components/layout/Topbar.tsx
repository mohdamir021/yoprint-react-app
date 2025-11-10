import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RouteType } from "../../App";
import { IoMenu } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

interface TopbarProps {
  routes: RouteType[];
}

export default function Topbar({ routes }: TopbarProps) {
  return (
    <Flex
      w={"full"}
      h={"full"}
      maxHeight={"16"}
      px={4}
      py={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={"rgba(126, 126, 126, 0.1)"}
      position={"sticky"}
      top={"0px"}
      zIndex={1000}
      bgColor={"#151517"}
      // Outline
      // bgColor={"pink"}
    >
      <Flex
        gap={2}
        // Outline
        // bgColor={"blue"}
      >
        <Text mr={3}>Anime Search</Text>

        {routes.map(({ path, caption }, index) => (
          <Link key={`${index}-link-to-${path}`} to={path}>
            <Box>{caption}</Box>
          </Link>
        ))}
      </Flex>

      <Flex
        gap={2}
        alignItems={"center"}
        w={"full"}
        maxW={"400px"}
        // Outline
        // bgColor={"red"}
      >
        <InputGroup
          w={"full"}
          maxW={"600px"}
          flex={"1"}
          startElement={<LuSearch />}
        >
          <Input w={"full"} placeholder="Search anime" />
        </InputGroup>
        <IconButton
          // Outline
          bgColor={"green"}
        >
          <IoMenu />
        </IconButton>
      </Flex>
    </Flex>
  );
}
