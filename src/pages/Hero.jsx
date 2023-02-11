import {
  Box,
  Button,
  Container,
  Flex,
  Highlight,
  HStack,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { IoMdDownload } from "react-icons/io";
import resume from "../images/Lipan_Padhan_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

import hero from "../images/myPp.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
    });
  }, []);

  const bg = useColorModeValue(
    "linear-gradient(3deg, rgba(216,241,255,1) 0%, rgba(175,188,255,0) 100%)",
    "linear-gradient(221deg, rgba(14,4,4,1) 0%, rgba(61,61,61,1) 51%, rgba(64,64,64,1) 60%, rgba(55,55,55,1) 70%, rgba(14,4,4,1) 100%)"
  );

  const HeroImage = useColorModeValue(hero, hero);

  //const MainFont = useColorModeValue('#302e4c', '#ac7642')
  const MainFont = useColorModeValue(
    "#302e4c",
    "linear(to-b, #ffdda1, #b07844)"
  );

  const txtWriter = useColorModeValue("#1dd3b0", "white");

  const buttonColor = useColorModeValue(
    "#01497c",
    "linear(to-b, #ffdda1, #b07844)"
  );
  const onHoverColor = useColorModeValue("#01497c", "#835d3b");

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1GVua_3kW2MZGUMdGNApSG-m6lu-fDwXW/view?usp=share_link"
    );
  };

  return (
    <Stack
      position="relative"
      id="home"
      p={{ base: 0, sm: 8 }}
      w="full"
      bg={bg}
    >
      <Stack
        data-aos="zoom-in"
        justifyContent={{ base: "space-around", sm: "space-around" }}
        alignItems="center"
        p={{ base: 0, sm: 8 }}
        alignSelf="center"
        justify="center"
        w="full"
        maxW="1400px"
        h={{ base: "90vh", sm: "80vh", md: "90vh" }}
        flexFlow={{ base: "column-reverse", lg: "row" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex
          marginTop={{ base: "-50px", sm: "0px" }}
          w={{ base: "90%", sm: "500px", md: "600px" }}
          flexDirection="column"
          h="fit-content"
          alignItems={{ base: "center", lg: "flex-start" }}
          p={5}
          spacing={{ base: 1, md: 5 }}
        >
          <Text fontSize={{ base: "18px", sm: "2xl" }} fontWeight="m">
            Hii i'm
          </Text>
          <Tilt>
            <Text
              fontWeight="semibold"
              bg={MainFont}
              bgGradient={MainFont}
              bgClip="text"
              fontSize={{ base: "4xl", sm: "4xl", md: "4xl", lg: "5xl" }}
            >
              Lipan Padhan
            </Text>
          </Tilt>
          <Text
            fontSize={{ base: "18px", sm: "2xl", md: "xl", lg: "3xl" }}
            fontWeight="semibold"
          >
            <Text color={txtWriter}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Problem Solver",
                  "Fast Learner",
                ]}
                loop={500000}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </Text>
          </Text>

          <HStack alignItems="center">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer noopener"
              onClick={handleResumeDownload}
              download
            >
              <Button
                fontWeight="medium"
                _hover={{ bg: onHoverColor }}
                marginTop="3"
                size="lg"
                colorScheme="blue"
                bgGradient={buttonColor}
              >
                {" "}
                Resume <AiOutlineDownload fontSize={29} />{" "}
              </Button>
            </a>

            {/* <a href={resume}   download>
             <IconButton
              _hover={{   bg: onHoverColor ,  fontSize:"4xl",   }}
              bgGradient={buttonColor} 
             marginTop="3"
            
             size="lg"
             borderRadius="5px"
               fontSize="3xl"
               colorScheme="red"
               
               
               icon={<IoMdDownload />}
             />
          </a>  */}
          </HStack>
        </Flex>

        <VStack
          boxSize={{ base: "270px", sm: "300px", md: "350px" }}
          h="fit-content"
          alignItems="flex-start"
          p={{ base: 10, md: 5 }}
        >
          <Tilt>
            <Image
              data-aos="zoom-in"
              marginTop={{ base: "35px", sm: "0px", lg: "-45px" }}
              w="full"
              src={HeroImage}
            />
          </Tilt>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default Hero;
