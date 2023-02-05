import {
  Highlight,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Tilt from "react-parallax-tilt";

import "aos/dist/aos.css";
import Github from "./Github";

const GithubComp = () => {
  const HeadingColor = useColorModeValue("black", "white");
  const QueryColor = useColorModeValue("#13d799", "#eac288");
  return (
    <Stack marginTop={{ base: "20px", sm: "none" }} p={{ base: 8, sm: 8 }}>
      <Stack
        justifyContent={{ base: "space-evenly", sm: "space-around" }}
        alignItems="center"
        p={{ base: 0, sm: 8 }}
        alignSelf="center"
        justify="center"
        w="full"
        maxW="1400px"
      >
        <Github />
        <VStack gap={5}>
          <Tilt>
            <Stack textAlign="center" alignContent="center" data-aos="zoom-in">
              <Text
                color={HeadingColor}
                fontSize={{ base: "xl", sm: "4xl", md: "4xl" }}
                fontWeight="semibold"
              >
                <Highlight query="STATS" styles={{ color: QueryColor }}>
                  GITHUB STATS
                </Highlight>
              </Text>
              <Text>My overall statistics and contribution</Text>
            </Stack>
          </Tilt>

          <Stack
            spacing={5}
            gap={5}
            flexDirection={{ base: "column", xl: "row" }}
          >
            <Image
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=lipan1437&show_icons=true&locale=en"
              alt="lipan1437"
            />

            <Image
                
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=lipan1437&theme=default"
              alt="lipan1437"
            />
          </Stack>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default GithubComp;
