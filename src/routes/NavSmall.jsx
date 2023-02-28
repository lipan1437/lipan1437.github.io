import {
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiFillHome,
  AiFillFire,
  AiFillShopping,
} from "react-icons/ai";

import {BsFillArrowDownSquareFill} from "react-icons/bs"

import { SiAboutdotme } from "react-icons/si";
import { MdContactPage } from "react-icons/md";
import resume from "../images/fw18_0399-Lipan-Padhan-Resume.pdf";
import { Link } from "react-scroll";
import { FcAbout } from "react-icons/fc";

const NavSmall = () => {
  const Links = [
    {
      name: AiFillHome,
      link: "home",
    },
    {
      name: SiAboutdotme,
      link: "about",
    },
    {
      name: AiFillShopping,
      link: "projects",
    },
    {
      name: AiFillFire,
      link: "skills",
    },
    {
      name: MdContactPage,
      link: "contact",
    },
  ];

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1GVua_3kW2MZGUMdGNApSG-m6lu-fDwXW/view?usp=share_link"
    );
  };

  const [selectedBtn, setSelectedBtn] = useState(0);

  const bg = useColorModeValue("#103783", "linear(to-b, #ffdda1, #b07844)");
  const buttonClor = useColorModeValue("white", "#312e2e");
  const selected = useColorModeValue("#103783", "#a2670a");

  //const MainFont = useColorModeValue('#302e4c', '#ac7642')
  const MainFont = useColorModeValue("#302e4c", "#eac288");

  return (
    <HStack
      display={{ base: "-webkit-inline-flex", lg: "none" }}
      bg={bg}
      bgGradient={bg} // FAF5FF // FFF5F5 // #FFF5F7 #EBF8FF
      style={{ position: "fixed", bottom: 0, left: 0, right: 10 }}
      alignSelf="center"
      p="6px 5%"
      borderRadius={"10px 10px 0px 0px"}
      w="100%"
      h="54px"
      justifyContent="space-between"
      overflowWrap="anywhere"
    >
      {Links.map((el, i) => (
        <Link
          onClick={() => {
            setSelectedBtn(i);
          }}
          key={el.name}
          to={el.link}
          smooth={true}
          offset={-50}
          duration={400}
          end
        >
          <IconButton
            // color={selectedBtn === i ? "white" : "#302E4C;"}
            fontSize={selectedBtn === i ? "3xl" : "2xl"}
            bg={selectedBtn === i ? "whiteAlpha.900" : "none"}
            borderTop={selectedBtn === i ? "5px solid" : "none"}
            color={selectedBtn === i ? selected : buttonClor}
            variant={selectedBtn === i ? "outline" : "solid"}
            borderRadius={"50px 50px 50px 50px"}
            h={selectedBtn === i ? "55px" : "none"}
            position={selectedBtn === i ? "relative" : "unset"}
            top="-2"
            icon={<el.name />}
          />
        </Link>
      ))}
      <a
        href={resume}
        target="_blank"
        rel="noreferrer noopener"
        onClick={handleResumeDownload}
        download
      >
          <BsFillArrowDownSquareFill
            fontSize={selectedBtn === <BsFillArrowDownSquareFill /> ? "3xl" : "2xl"}
            bg={
              selectedBtn === <BsFillArrowDownSquareFill /> ? "whiteAlpha.900" : "none"
            }
            borderTop={
              selectedBtn === <BsFillArrowDownSquareFill /> ? "5px solid" : "none"
            }
            color={
              selectedBtn === <BsFillArrowDownSquareFill /> ? selected : buttonClor
            }
            variant={
              selectedBtn === <BsFillArrowDownSquareFill /> ? "outline" : "solid"
            }
            borderRadius={"50px 50px 50px 50px"}
            h={selectedBtn === <BsFillArrowDownSquareFill /> ? "55px" : "none"}
            position={
              selectedBtn === <BsFillArrowDownSquareFill /> ? "relative" : "unset"
            }
            top="-2"
          />
      </a>
    </HStack>
  );
};

export default NavSmall;
