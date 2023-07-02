import React from "react";
import { Box, Flex, Text, Img } from "@chakra-ui/react";
import hackASkill from "../../assets/hackaskill.png";
import earnRewards from "../../assets/earnrewards.png";
import landAJob from "../../assets/landajob.png";

const About: React.FC = () => {
  const items = [
    { image: hackASkill, text: "Hack A Skill" },
    { image: earnRewards, text: "Earn Rewards" },
    { image: landAJob, text: "Land A Job" },
  ];

  return (
    <Box
      p={"8rem"}
      background={"linear-gradient(45deg, #3771E3, #282828)"}
      box-shadow={"inset 0 0 10px 2px black"}
    >
      <Flex justify="space-between">
        {items?.map((item: any) => (
          <>
            <Box key={item.text} position="relative" cursor={"pointer"}>
              <Img
                src={item?.image}
                alt="aboutSkillHack"
                borderRadius={"30px"}
              />
              <Text
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color={"white"}
                fontSize={"22px"}
                fontWeight={600}
                lineHeight={"normal"}
              >
                {item?.text}
              </Text>
            </Box>
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default About;
