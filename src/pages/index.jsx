import React from "react";
import Title from "../components/title/Title";
import History from "../components/title/History";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box pl="10px">
        <History pagename="Dashboard" />
        <Title title="Dashboard" desc="이 페이지는 Dashboard 페이지 입니다." />
      </Box>
    </>
  );
};

export default Home;
