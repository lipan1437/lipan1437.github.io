import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Highlight,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { GoDeviceCameraVideo } from "react-icons/go";
import { ViewIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import GithubComp from "./GithubComp";

import htmlLogo from "../images/html.png";

import CSS from "../assets/css.png";
import Bootsrap from "../assets/Bootstrap_logo.svg.png";
import Tailwind from "../assets/tailwind.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Redux from "../assets/redux.png";
import ChakraUI from "../assets/chakra.png";
import MaterialUI from "../assets/material-ui.png";

import Node from "../assets/node.png";
import Express from "../assets/express.png";
import Mongo from "../assets/mongodb.png";
import Mongoose from "../assets/mongoose.png";
import Git from "../assets/git.png";
import Postman from "../assets/postman.png";

import Photoshop from "../assets/photoshop.png";
import Corel from "../assets/corel.png";
import Illustratir from "../assets/adobe.png";
import Effects from "../assets/after.png";
import Auto from "../assets/autocad.png";
import { useState } from "react";

const skillsD = [
  { img: htmlLogo, name: "HTML", type: "front" },
  { img: CSS, name: "CSS", type: "front" },
  { img: Javascript, name: "Javascript", type: "front" },
  { img: ReactLogo, name: "React", type: "front" },
  { img: Redux, name: "Redux", type: "front" },
  { img: ChakraUI, name: "Chakra UI", type: "front" },
  { img: Node, name: "Node JS", type: "back" },
  { img: Express, name: "Express", type: "back" },
  { img: Mongo, name: "Mongo DB", type: "back" },
  { img: Mongoose, name: "Mongoose", type: "back" },
  { img: Git, name: "Git", type: "back" },
  { img: Postman, name: "Postman", type: "back" },
];

const buttonData = [
  { name: "All", value: "all" },
  { name: "Frontend", value: "front" },
  { name: "Backend", value: "back" },
];

const Skills = () => {
  const [data, setData] = useState(skillsD);
  const [Scss, setCss] = useState(false);

  const FilterData = (type) => {
    if (type == "all") {
      setData(skillsD);
      return;
    }

    const newData = skillsD.filter((el) => el.type == type);
    setData(newData);
  };

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const activeStyle = {
    color: "red",
  };
  const defaultStyle = {
    color: "black",
  };

  const [selectedBtn, setSelectedBtn] = useState(0);

  //const bg = useColorModeValue("white", "#312e2e")
  const HeadingColor = useColorModeValue("black", "white");
  const QueryColor = useColorModeValue("#1dd3b0", "#eac288");
  const selected = useColorModeValue("#262e30", "#b5925f");

  const SkillColor = useColorModeValue(
    "linear-gradient(3deg, rgb(236,240,243) 0%, rgba(175,188,255,0) 70%)",
    "whiteAlpha.100"
  );

  const hovekaro = useColorModeValue("white", "blackAlpha.500");

  const bg = useColorModeValue(
    "white",
    "linear-gradient(221deg, rgba(14,4,4,1) 0%, rgba(61,61,61,1) 51%, rgba(64,64,64,1) 60%, rgba(55,55,55,1) 70%, rgba(14,4,4,1) 100%)"
  );

  return (
    <Stack
      position="relative"
      id="skills"
      p={{ base: 0, lg: 8 }}
      w="full"
      bg={bg}
    >
      // #EBF8FF // FAF5FF // FFF5F5 // #FFF5F7 h="90vh"
      <Stack
        data-aos="fade-right"
        justifyContent={{ base: "space-around", sm: "space-around" }}
        alignItems="center"
        p={{ base: 0, sm: 8 }}
        alignSelf="center"
        justify="center"
        w="full"
        maxW="1400px"
        flexFlow={"column"}
      >
        <Tilt>
          <Stack data-aos="fade-up">
            <Text
              color={HeadingColor}
              marginTop={50}
              fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
              fontWeight="semibold"
            >
              <Highlight query="Skills" styles={{ color: QueryColor }}>
                My Skills
              </Highlight>
            </Text>
          </Stack>
        </Tilt>

        <HStack
          data-aos="zoom-in"
          justifyContent="center"
          w="full"
          spacing={{ base: 2, sm: 5 }}
          p={{ base: 0, sm: 5 }}
        >
          {buttonData?.map((el, i) => (
            <Button
              borderRadius={5}
              onClick={() => {
                FilterData(el.value);
                setSelectedBtn(i);
              }}
              color={selectedBtn === i ? "white" : "none"}
              bg={selectedBtn === i ? selected : "whiteAlpha.200"}
              _hover={{ bg: selected, color: "white" }}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              fontWeight="medium"
              size={{ base: "sm", sm: "md" }}
            >
              {el.name}
            </Button>
          ))}
        </HStack>

        <SimpleGrid
          w="full"
          p={{ base: 0, sm: 0 }}
          spacing={{ base: 5, lg: 5, xl: 10 }}
          columns={{ base: 4, sm: 4, md: 7, lg: 7, xl: 8 }}
        >
          {data?.map((el) => (
            <VStack
              justifyContent="space-around"
              bg={SkillColor}
              w={{ base: "80px", md: "80px", lg: "100px", xl: "120px" }}
              p={3}
              borderRadius={5}
              _hover={{
                shadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                bg: hovekaro,
              }}
            >
              <Image src={el.img} w="full" />

              <Text
                fontSize={{ base: "10px", md: "13px", lg: "13px", xl: "15px" }}
              >
                {el.name}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
      <GithubComp />
    </Stack>
  );
};

export default Skills;
