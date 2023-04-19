import {
  Box,
  Button,
  Center,
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

import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { GoDeviceCameraVideo } from "react-icons/go";
import { ViewIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

import appletv from "../images/pro2.png";
import bewakoof from "../images/bewakoof.png";
import greenhouse from "../images/pro1.png";
import overstock from "../images/overstock.png";
import gobazaar from "../images/gobazzar.png"
import { ButtonGroup } from "react-bootstrap";

const projects = [
  {
    type: "HTML",
    name: "Apple Tv+",
    image: appletv,
    description:
      "It is a Collaborated project complete in 5 days with a team of 6 members. An Online ott platform for watching movies, TV series, etc . Features are Home page | Login page | Single page | Slider.",
    tech: " HTML , CSS , JavaScript",
    view: "https://courageous-pika-87b0ca.netlify.app",
    git: "https://github.com/arnab9593/appletv",
  },
  {
    type: "HTML",
    name: "Greenhouse.io",
    image: greenhouse,
    description:
      "It is a Collaborated project complete in 5 days with a team of 4 members. A hiring platform Sourcing Automation help hiring teams find, reach and engage top talent quickly and  effectively. Features are Home page | Login page | Community page | Footer.",
    tech: "HTML, CSS, JAVASCRIT",
    view: "https://elaborate-brigadeiros-9edad5.netlify.app",
    git: "https://github.com/suraj-996/showy-knot-1716",
  },

  {
    type: "React",
    name: "Fraudy.com",
    image: bewakoof,
    description:
      "It is a Collaborated project complete in 5 days with a team of 4 members. An Online shopping website clone of bewakoof.com where user can shop any type of clothing. Features are Home page | Login page | Single page | Slider.",
    tech: " HTML, CSS, JavaScript, ReactJS, ChakraUI, Redux",
    view: "https://fraudy.vercel.app/",
    git: "https://github.com/amansingh456/shallow-creature-244",
  },
  {
    type: "HTML",
    name: "OverStock.com",
    image: overstock,
    description:
      "This  website is a clone of overStock.com . OverStock.com is a E-commerce website. This website we have been given in unit 3 while studying at Masai School . This is a collaborative project in a team of 4 member. Features are Home page | Login page | Single page | Product page  | Slider. ",
    tech: " HTML, CSS, JavaScript",
    view: "https://gleaming-wisp-eb6c81.netlify.app/",
    git: "https://github.com/lipan1437/-coherent-mother-3147",
  },
  {
    type: "MERN",
    name: "GoBazaar.com",
    image: gobazaar,
    description:
      "This  website is a clone of Quickerbazzer.com. It's a E-commerce website where user can sell and buy their products. This is a collaborative project in a team of 5 member. Features are Home page | Login page | Single page | Product page  | Slider | Admin page . ",
    tech: " React, Redux, CSS, NodeJs, ExpressJs, Mongodb",
    view: "https://gobazzar.vercel.app/",
    git: "https://github.com/lipan1437/Gobazzar.com",
  },
];

const Project = () => {
  const [data, setData] = useState(projects);
  const [Scss, setCss] = useState(false);

  const FilterData = (type) => {
    if (type == "All") {
      setData(projects);
      return;
    }

    const newData = projects.filter((el) => el.type == type);
    setData(newData);
  };

  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  const bg = useColorModeValue(
    "linear-gradient(3deg, rgba(216,241,255,1) 0%, rgba(175,188,255,0) 100%)",
    "linear-gradient(221deg, rgba(14,4,4,1) 0%, rgba(61,61,61,1) 51%, rgba(64,64,64,1) 60%, rgba(55,55,55,1) 70%, rgba(14,4,4,1) 100%)"
  );

  const HeadingColor = useColorModeValue("black", "white");
  const QueryColor = useColorModeValue("#07beb8", "#eac288");

  const divColor = useColorModeValue("white", "rgba(255, 255, 255, 0.3)");
  const selected = useColorModeValue("#0b3954", "#b5925f");

  const descColor = useColorModeValue("gray.500", "white");
  const selectedGit = useColorModeValue("gray.600", "#eac288");

  const buttonData = [
    { name: "All", value: "All" },
    { name: "React", value: "React" },
    { name: "HTML", value: "HTML" },
    { name: "MERN", value: "MERN" },
  ];

  const [selectedBtn, setSelectedBtn] = useState(0);

  return (
    <Stack
      position="relative"
      id="projects"
      p={{ base: 0, sm: 8 }}
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
              fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
              fontWeight="semibold"
            >
              <Highlight query="Projects" styles={{ color: QueryColor }}>
                My Creative Projects
              </Highlight>
            </Text>
          </Stack>
        </Tilt>

        <HStack
          data-aos="zoom-in"
          justifyContent="center"
          w="full"
          spacing={{ base: 2, sm: 5 }}
          p={5}
        >
          {buttonData.map((el, i) => (
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
            >
              {el.value}
            </Button>
          ))}
        </HStack>

        <SimpleGrid
          p={5}
          spacing={10}
          columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        >
          {data.map((el) => (
            <VStack
              boxShadow="rgba(0, 0, 0, 0.14) 0px 3px 8px"
              maxW="320px"
              id="box"
              borderRadius={5}
              bg={divColor}
              p={4}
              spacing={4}
              alignItems="center" justifyContent="space-between"
            >
              <VStack>
                <Image borderRadius={5} src={el.image} alt="sufi" />
              </VStack>
              <Text
                fontSize={{ base: "xl", md: "xl", lg: "xl", xl: "2xl" }}
                fontWeight="semibold"
              >
                {el.name}
              </Text>
              <VStack>
                <Text
                  display={{ base: "none", md:"inline-flix",sm: "inline-flex"}}
                  fontSize={{ base: "13px", md: "12px", lg: "12px", xl: "sm" }}
                  color={descColor}
                >
                  {el.description}
                </Text>

                <Text
                  w="100%"
                  fontSize={{ base: "13px", md: "sm", lg: "12px", xl: "sm" }}
                  marginTop={50}
                  fontWeight="medium"
                >
                  <Highlight
                    query="Tech Stack"
                    styles={{
                      color: QueryColor,
                      fontWeight: "semibold",
                    }}
                  >
                    {`Tech Stack - ${el.tech}`}
                  </Highlight>
                </Text>

               
              </VStack>
              <HStack spacing={5}>
                  <a href={el.view} target="_blank">
                    <Text
                      color={selectedGit}
                      fontSize={{ lg: "xl", xl: "2xl" }}
                      className="projectButton"
                    >
                      <ViewIcon />
                    </Text>
                  </a>

                  <a href={el.git} target="_blank">
                    <Text
                      color={selectedGit}
                      fontSize={{ lg: "xl", xl: "2xl" }}
                      className="projectButton"
                    >
                      <BsGithub />
                    </Text>
                  </a>
                </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Project;
