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
      // Outline
      // bgColor={"pink"}
    >
      <Flex
      // Outline
      // bgColor={"blue"}
      >
        <Text>Anime Search</Text>
      </Flex>

      <Flex
        gap={2}
        alignItems={"center"}
        w={"full"}
        maxW={"600px"}
        // Outline
        // bgColor={"red"}
      >
        <InputGroup
          w={"full"}
          maxW={"600px"}
          flex={"1"}
          startElement={<LuSearch />}
        >
          <Input w={"full"} maxW={"600px"} placeholder="Search anime" />
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
