import {
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHome, AiFillFire, AiFillShopping } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdContactPage } from "react-icons/md";

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
      borderRadius={"25px 25px 0px 0px"}
      w="100%"
      h="54px"
      spacing="7"
      justifyContent="space-between"
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
    </HStack>
  );
};

export default NavSmall;
