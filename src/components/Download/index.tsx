import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { DownloadText, PlayStore, AppStore, Phone } from "../../assets";

const Download: React.FC = () => {
  const downloadUrls = {
    appStore: "https://www.appstore.com/example",
    playStore:
      "https://play.google.com/store/apps/details?id=com.skill.skillhack",
  };
  return (
    <Box p={"6rem"} background={"linear-gradient(to bottom, #282828, #000000)"}>
      <Flex justifyContent={"space-between"}>
        <Flex
          direction="column"
          justifyContent={"space-evenly"}
          cursor={"pointer"}
        >
          <DownloadText />
          <Link href={downloadUrls.playStore} isExternal>
            <PlayStore />
          </Link>
          {/* <Link href={downloadUrls.appStore} isExternal> */}
          <AppStore />
          {/* </Link> */}
        </Flex>
        <Phone />
      </Flex>
    </Box>
  );
};

export default Download;
