import React from "react";
import Title from "../components/title/Title";
import History from "../components/title/History";
import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";

const Tables = () => {
  return (
    <Stack spacing={"30px"} h={"calc(100vh - 100px)"}>
      <Box pl="10px">
        <History pagename="tables" />
        <Title title="Tables" desc="이 페이지는 tables 페이지 입니다." />
      </Box>
      <Grid
        flexGrow={"1"}
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem bg="red" />
        <GridItem bg="orange" />
        <GridItem bg="yellow" />
        <GridItem bg="green" />
      </Grid>
    </Stack>
  );
};

export default Tables;
