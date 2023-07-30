import React from "react";
import { Box, Flex, Link, VStack } from "@chakra-ui/react";
import {
  Heading1,
  SkillHackLogo,
  InfoPhone,
  Heading2,
  Heading3,
  Button1,
} from "../../assets";
import Urls from "../../utils";

const Info: React.FC = () => {
  return (
    <Box
      background={
        "linear-gradient(to bottom right, #282828 0%, #000000 50%, #3771E3 50%, #000000 50%, #282828 100%)"
      }
      p={"2rem"}
    >
      <SkillHackLogo />
      <Flex
        flexDir={["column", "column", "row"]}
        alignItems={["center", "center", "start"]}
      >
        <VStack pt={"8rem"}>
          <Heading1 />
          <Heading2 />
          <Heading3 />
          <Link href={Urls?.playStore} isExternal>
            <Button1 />
          </Link>
        </VStack>
        <Flex width={"100%"}>
          <InfoPhone />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Info;
