import React from "react";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { SLH, FB, TWITTER, LINKEDIN } from "../../assets";

const Footer: React.FC = () => {
  const socialMediaUrls = {
    facebook: "https://www.facebook.com/example",
    twitter: "https://www.twitter.com/example",
    linkedin: "https://www.linkedin.com/company/skillhack/",
  };
  return (
    <Box bg="white" p={"2rem"}>
      <Flex justifyContent={"space-between"}>
        <SLH />
        <HStack justifyContent={"space-evenly"} cursor={"pointer"}>
          {/* <Link href={socialMediaUrls.facebook} isExternal> */}
          <FB />
          {/* </Link> */}
          {/* <Link href={socialMediaUrls.twitter} isExternal> */}
          <TWITTER />
          {/* </Link> */}
          <Link href={socialMediaUrls.linkedin} isExternal>
            <LINKEDIN />
          </Link>
        </HStack>
      </Flex>
      <Text align={"center"}>&copy; SKILL HACK</Text>
    </Box>
  );
};

export default Footer;
