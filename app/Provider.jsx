"use client";

import React from "react";
import Header from "./_components/Header";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Hero from "./_components/Hero";

// Extend the theme
const colors = {
  brand: { 900: "#652B19", 700: "#9C4221" },
};
const theme = extendTheme({ colors });

function Provider({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />

      {children}
    </ChakraProvider>
  );
}

export default Provider;
