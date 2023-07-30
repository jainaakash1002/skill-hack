import React from "react";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { SLH, FB, TWITTER, LINKEDIN } from "../../assets";
import Urls from "../../utils";

const Footer: React.FC = () => {
  return (
    <Box bg="white" p={"2rem"}>
      <Flex justifyContent={"space-between"}>
        <SLH />
        <HStack justifyContent={"space-evenly"} cursor={"pointer"}>
          <FB />
          <TWITTER />
          <Link href={Urls?.linkedin} isExternal>
            <LINKEDIN />
          </Link>
        </HStack>
      </Flex>
      <Text align={"center"}>&copy; SKILL HACK</Text>
    </Box>
  );
};

export default Footer;
