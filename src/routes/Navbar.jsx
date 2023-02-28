import {
  Box,
  Button,
  Flex,
  Highlight,
  HStack,
  Progress,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import {AiOutlineDownload} from "react-icons/ai"
import { Link } from "react-scroll";
import resume from "../images/fw18_0399-Lipan-Padhan-Resume.pdf";
const Links = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [selectedBtn, setSelectedBtn] = useState(0);

  const bg = useColorModeValue(
    "#EBF8FF",
    "linear-gradient(0deg, rgba(64,57,53,1) 0%, rgba(37,32,32,1) 31%)"
  );

  //const MainFont = useColorModeValue('#302e4c', '#ac7642')
  const MainFont = useColorModeValue("#302e4c", "#eac288");

  const borderBottomColor = useColorModeValue(
    "3px solid #343a40",
    "3px solid #eac288"
  );

  const buttonColor = useColorModeValue(
    "#343a40",
    "linear(to-b, #ffdda1, #b07844)"
  );
  const onHoverColor = useColorModeValue("#38a3a5", "#835d3b");

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1GVua_3kW2MZGUMdGNApSG-m6lu-fDwXW/view?usp=share_link"
    );
  };



  return (
    <HStack
      bg={bg} // FAF5FF // FFF5F5 // #FFF5F7 #EBF8FF
      style={{ position: "fixed", top: 0 }}
      p="0px 5%"
      justify="center"
      w="100%"
      h="64px"
      borderBottom={borderBottomColor}
      cursor="pointer"
    >
      //#302E4C
      <Stack minW="80px" w="120px" alignItems="center"></Stack>
      <Spacer />
      <Box display={{ base: "none", md: "none", lg: "block"}}>
        <HStack>
          {Links.map((el, i) => (
            <Link
              onClick={() => {
                setSelectedBtn(i);
              }}
              // className="text"
              to={el.link}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Text
                padding="5px 20px"
                borderRadius={30}
                color={selectedBtn === i ? "white" : MainFont}
                bg={selectedBtn === i ? buttonColor : "none"}
                fontSize="18px"
              >
                {el.name}
              </Text>
            </Link>
          ))}

          <a
            href={resume}
            target="_blank"
            rel="noreferrer noopener"
            onClick={handleResumeDownload}
            download
          >
            <Button
              bgGradient={buttonColor}
              _hover={{ bg: onHoverColor }}
              fontWeight="medium"
              size={{ lg: "sm", xl: "md" }}
              colorScheme="blue"
            >
              Resume <AiOutlineDownload fontSize={18} />
            </Button>
          </a>
        </HStack>
      </Box>
      <HStack></HStack>
    </HStack>
  );
};

export default Navbar;
