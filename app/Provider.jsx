"use client";

import React from "react";
import Header from "./_components/Header";
import { ChakraProvider } from "@chakra-ui/react";

function Provider({ children }) {
  return (
    <ChakraProvider>
      <Header />
      {children}
    </ChakraProvider>
  );
}

export default Provider;
