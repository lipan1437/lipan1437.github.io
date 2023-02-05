import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Highlight,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const bg = useColorModeValue("white", "#312e2e");
  const HeadingColor = useColorModeValue("black", "white");
  const QueryColor = useColorModeValue("#0e9796", "#eac288");

  return (
    <Stack id="about" p={{ base: 8, sm: 8 }} w="full" bg={bg}>
      {" "}
      // #EBF8FF // FAF5FF // FFF5F5 // #FFF5F7
      <Stack
        justifyContent={{ base: "space-evenly", sm: "space-around" }}
        alignItems="center"
        p={{ base: 0, sm: 8 }}
        alignSelf="center"
        justify="center"
        w="full"
        maxW="1400px"
      >
        <Tilt>
          <Stack data-aos="zoom-in">
            <Text
              color={HeadingColor}
              marginTop={50}
              fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
              fontWeight="semibold"
            >
              <Highlight query="About" styles={{ color: QueryColor }}>
                All About Me
              </Highlight>
            </Text>
          </Stack>
        </Tilt>
        <Stack
          justifyContent={{ base: "space-evenly", sm: "space-around" }}
          alignItems="center"
          spacing={5}
          alignSelf="center"
          justify="center"
          w="full"
          maxW="1400px"
          flexFlow={{ base: "column-reverse", md: "row" }}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <VStack
            data-aos="zoom-in"
            marginTop={{ base: "-80px", sm: "-160px", md: -"160px" }}
          >
            <Tilt>
              <Image
                w={{ base: "full", md: "400px", xl: "800px" }}
                src="https://i.ibb.co/JkWdML5/ 68747470733a2f2f63646e2e647269-unscreen.gif"
              />
            </Tilt>{" "}
          </VStack>

          <VStack
            data-aos="zoom-in"
            spacing={5}
            p={{ base: 5, sm: 5 }}
            w={{ base: "sm", md: "60%", lg: "60%", xl: "40%" }}
          >
            <Text
              marginTop={{ base: "-40px" }}
              fontSize={{ base: "15px", lg: "xl" }}
              color="gray"
            >
              Hello my name is Lipan Padhan. I'm a Self-motivated and Aspiring
              Full Stack Web Developer with expertise in creating user-friendly
              websites. I look forward to an opportunity to deploy my skills and
              hone skills in working with a Company.
            </Text>

            <Divider borderColor="gray.500" />

            <Text fontSize={{ base: "15px", lg: "xl" }} color="gray">
              I'm open to Job opportunities. If you think my skills are relevant
              to your job requirements then do contact me.
            </Text>
          </VStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
