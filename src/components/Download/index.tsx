import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { DownloadText, PlayStore, AppStore, Phone } from "../../assets";
import Urls from "../../utils";

const Download: React.FC = () => {
  return (
    <Box p={"6rem"} background={"linear-gradient(to bottom, #282828, #000000)"}>
      <Flex
        justifyContent={"space-between"}
        direction={["column", "column", "row"]}
        alignItems={"center"}
      >
        <Flex
          direction="column"
          justifyContent={"space-evenly"}
          cursor={"pointer"}
          gap={10}
        >
          <DownloadText />
          <Link href={Urls?.playStore} isExternal>
            <PlayStore />
          </Link>
          <AppStore />
        </Flex>
        <Phone />
      </Flex>
    </Box>
  );
};

export default Download;
