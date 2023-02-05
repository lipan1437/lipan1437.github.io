import {
  Highlight,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";



function Github() {
  const HeadingColor = useColorModeValue("black", "white");
  const QueryColor = useColorModeValue("#13d799", "#eac288");

  return (
    <VStack
      h="50vh"
      justifyContent="center"
      spacing={5}
      margin="auto"
      alignSelf="center"
      w={{ base: "80%" }}
    >
      <Stack textAlign="center" alignContent="center" data-aos="fade-up">
        <Text
          color={HeadingColor}
          fontSize={{ base: "xl", sm: "4xl", md: "4xl" }}
          fontWeight="semibold"
        >
          <Highlight query="CALENDER" styles={{ color: QueryColor }}>
            GITHUB CONTRIBUTION CALENDER
          </Highlight>
        </Text>
        <Text>Here find my github contribution over last months</Text>
      </Stack>
      <Tilt>
        <Stack display={{ base: "none", md: "block" }} data-aos="fade-up">
          <GitHubCalendar
            username="lipan1437"
            blockSize={25}
            blockRadius={5}
            blockMargin={10}
            color={QueryColor}
            fontSize={18}
          />
        </Stack>
        <Stack  marginBottom="100px" display={{ base: "block", md: "none" }} data-aos="fade-up">
          <GitHubCalendar
            username="lipan1437"
            blockSize={25}
            blockRadius={5}
            blockMargin={15}
            color={QueryColor}
            fontSize={18}
          />
        </Stack>
      </Tilt>
    </VStack>
  );
}

export default Github;
