import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { SLH, FB, TWITTER, LINKEDIN } from "../../assets";

const Footer: React.FC = () => {
  return (
    <Box bg="white" p={"2rem"}>
      <Flex justifyContent={"space-between"}>
        <SLH />
        <HStack justifyContent={"space-evenly"} cursor={"pointer"}>
          <FB />
          <TWITTER />
          <LINKEDIN />
        </HStack>
      </Flex>
      <Text align={"center"}>&copy; SKILL HACK</Text>
    </Box>
  );
};

export default Footer;
