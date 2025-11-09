import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Layout from "./components/layout/Layout";
import { Box } from "@chakra-ui/react";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound";

export interface RouteType {
  caption: string;
  path: string;
  element: React.JSX.Element;
}

const routes: RouteType[] = [
  { caption: "Home", path: "/", element: <Home /> },
  { caption: "List", path: "/list", element: <List /> },
];

const hiddenRoutes: RouteType[] = [
  {caption: "Show", path: "/show/:id", element: <Show />},
  {caption: "Not Found", path: "*", element: <NotFound />}
]

const allRoutes: RouteType[] = [...routes, ...hiddenRoutes]

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Box w={"full"} h={"100vh"}>
      {/* Navigation Links */}
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/list">List</Link> |{" "}
      </nav> */}

      <Layout routes={routes}>
        {/* Routes Configuration */}
        <Routes>
          {allRoutes.map(({ path, element }, index) => (
            <Route key={`${index}_${path}`} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
