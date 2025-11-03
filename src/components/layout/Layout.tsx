import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Topbar from "./Topbar";
import { RouteType } from "../../App";

type LayoutProps = {
  routes: RouteType[];
} & Partial<{
  children: ReactNode;
}>;

export default function Layout({ routes, children }: LayoutProps) {
  return (
    <Box w={"full"} h={"full"}>
      <Topbar routes={routes} />

      <Flex w={"full"} h={"full"}>
        <Box px={4} pt={6}>
          {children}

          {/* Bottom space/padding */}
          <Box h={4} />
        </Box>
      </Flex>
    </Box>
  );
}
