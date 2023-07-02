import React from "react";
import { Box, Img } from "@chakra-ui/react";
import loader from "../../assets/loader.png";

const Loader: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      background={"black"}
    >
      <Img src={loader} alt="loader" />
    </Box>
  );
};

export default Loader;
