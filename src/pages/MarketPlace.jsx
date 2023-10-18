import React from "react";
import Title from "../components/title/Title";
import History from "../components/title/History";
import { Box } from "@chakra-ui/react";

const MarketPlace = () => {
  return (
    <>
      <Box pl="10px">
        <History pagename="MarketPlace" />
        <Title title="MarketPlace" desc="이 페이지는 메인페이지 입니다." />
      </Box>
    </>
  );
};

export default MarketPlace;
