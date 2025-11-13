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
    >
      <Flex
      w={"full"}
      justifyContent={"center"}
        gap={2}
      >

        {routes.map(({ path, caption, icon }, index) => (
          <Link key={`${index}-link-to-${path}`} to={path}>
            <IconButton variant={"ghost"} px={4}>{icon}{" "}{caption}</IconButton>
          </Link>
        ))}
      </Flex>

      
    </Flex>
  );
}
