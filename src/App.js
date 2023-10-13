import React from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Home from "./pages";
import About from "./pages/About";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Reset />
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
