import React, { ReactNode } from "react";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <ChakraProvider>
        <ReduxProvider store={store}>
          <BrowserRouter>{children}</BrowserRouter>
        </ReduxProvider>
      </ChakraProvider>
    </React.Fragment>
  );
}
