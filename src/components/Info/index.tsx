import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { SkillHackLogo, First, InfoPhone } from "../../assets";

const Info: React.FC = () => {
  return (
    <Box
      background={
        "linear-gradient(to bottom right, #282828 0%, #000000 50%, #3771E3 50%, #000000 50%, #282828 100%)"
      }
      p={"2rem"}
    >
      <SkillHackLogo />
      <HStack>
        <First />
        <InfoPhone />
      </HStack>
    </Box>
  );
};

export default Info;
