import React from "react";
import Layout from "./components/layout/Layoyt";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import GlobalStyles from "./assets/styles/GlobalStyles.styles";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
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
// 여기는 <layout/> 이렇게 닫아주면 안된다. header나 footer는 그 자체가 컴포넌트라서 자식이 필요 없기에 </header> </footer>라고 닫아줘도 되는데 layout은 자식이 있기에 그냥 태그로 해줘야한다.
