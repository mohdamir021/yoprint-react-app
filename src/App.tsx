import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Layout from "./components/layout/Layout";
import { Box } from "@chakra-ui/react";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound";
import { IoHome } from "react-icons/io5";
import { MdBookmarks } from "react-icons/md";
import { Toaster } from "./components/ui/toaster";

export interface RouteType {
  caption: string;
  path: string;
  element: React.JSX.Element;
  icon?: React.JSX.Element;
}

const routes: RouteType[] = [
  { caption: "Home", path: "/", element: <Home />, icon: <IoHome /> },
  {
    caption: "My List",
    path: "/list",
    element: <List />,
    icon: <MdBookmarks />,
  },
];

const hiddenRoutes: RouteType[] = [
  { caption: "Show", path: "/show/:id", element: <Show /> },
  { caption: "Not Found", path: "*", element: <NotFound /> },
];

const allRoutes: RouteType[] = [...routes, ...hiddenRoutes];

function App() {
  return (
    <Box w={"full"} h={"100vh"}>
      <Layout routes={routes}>
        {/* Routes Configuration */}
        <Routes>
          {allRoutes.map(({ path, element }, index) => (
            <Route key={`${index}_${path}`} path={path} element={element} />
          ))}
        </Routes>
        {/* Toaster */}
        <Toaster />
      </Layout>
    </Box>
  );
}

export default App;
