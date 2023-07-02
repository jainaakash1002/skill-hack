import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { DownloadText, PlayStore, AppStore, Phone } from "../../assets";

const Download: React.FC = () => {
  return (
    <Box p={"6rem"} background={"linear-gradient(to bottom, #282828, #000000)"}>
      <Flex justifyContent={"space-between"}>
        <Flex
          direction="column"
          justifyContent={"space-evenly"}
          cursor={"pointer"}
        >
          <DownloadText />
          <PlayStore />
          <AppStore />
        </Flex>
        <Phone />
      </Flex>
    </Box>
  );
};

export default Download;
