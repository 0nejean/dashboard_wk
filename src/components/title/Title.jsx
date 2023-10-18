import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
//(인식) 대문자 = 컴포넌트 | 소문자 =

const Title = (props) => {
  return (
    <VStack alignItems={"flex-start"} spacing={4}>
      <Heading as={"h2"} fontSize={"34px"} fontWeight={700}>
        {props.title}
      </Heading>
      <Text variant={"txt164"}>{props.desc}</Text>
    </VStack>
  );
};

export default Title;
