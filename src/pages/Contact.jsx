import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

import React from "react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import emailjs from "emailjs-com";

const Contact = () => {
  const toast = useToast();
  const [Name, setName] = useState("");
  const [EmailS, setEmail] = useState("");
  const [Message, SetMessage] = useState("");

  const SendMail = () => {
    const templateParams = {
      name: Name,
      "user-email": EmailS,
      message: Message,
    };

    emailjs
      .send(
        "service_l9m74mr",
        "template_x5qkkco",
        templateParams,
        "ofXWfplpDwE66k1k1"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    toast({
      title: "Message sent successfully.",
      description: "to Lipan Padhan.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setName("");
    setEmail("");
    SetMessage("");
  };

  const bg = useColorModeValue(
    "#ebf8ff",
    "linear-gradient(221deg, rgba(14,4,4,1) 0%, rgba(61,61,61,1) 51%, rgba(64,64,64,1) 60%, rgba(55,55,55,1) 70%, rgba(14,4,4,1) 100%)"
  );

  const bgN = useColorModeValue(
    "#219ebc",
    "linear-gradient(221deg, rgba(14,4,4,1) 0%, rgba(61,61,61,1) 51%, rgba(64,64,64,1) 60%, rgba(55,55,55,1) 70%, rgba(14,4,4,1) 100%)"
  );

  const contatColor = useColorModeValue("white", "#eac288");

  const buttonColor = useColorModeValue(
    "#8ecae6",
    "linear(to-b, #ffdda1, #b07844)"
  );
  const onHoverColor = useColorModeValue("#219ebc", "#835d3b");

  return (
    <Container
      p={{ base: "5", sm: "none" }}
      marginBottom={{ base: "70px", md: "0px" }}
      id="contact"
      bg={bg}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
          bg={bgN}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={{ base: "5", sm: "10" }}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color={contatColor}>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 0, lg: 10 }}>
                    <VStack
                      direction={{ base: "row", md: "row", lg: "columns" }}
                      pl={0}
                      spacing={3}
                      alignItems="flex-start"
                    >
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        fontWeight="medium"
                        _hover={{ border: "2px solid white" }}
                        leftIcon={<MdPhone size="20px" />}
                      >
                        +91 9938498376
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        fontWeight="medium"
                        _hover={{ border: "2px solid white" }}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        lipanpadhan1432@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        fontWeight="medium"
                        _hover={{ border: "2px solid white" }}
                        leftIcon={<MdLocationOn size="20px" />}
                      >
                        Odisha, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ md: 3, lg: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <a href="https://github.com/lipan1437" target="_blank">
                      <IconButton
                        _hover={{ fontSize: "5xl" }}
                        bgGradient={buttonColor}
                        size="md"
                        fontSize="4xl"
                        colorScheme="blue"
                        variant="solid"
                        icon={<AiFillGithub />}
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/lipan-padhan-a0bb381a5/"
                      target="_blank"
                    >
                      <IconButton
                        size="md"
                        fontSize="3xl"
                        colorScheme="blue"
                        variant="solid"
                        _hover={{ fontSize: "5xl" }}
                        bgGradient={buttonColor}
                        icon={<BsLinkedin />}
                      />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            size="md"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            value={EmailS}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            size="md"
                            required
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          value={Message}
                          onChange={(e) => SetMessage(e.target.value)}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          _hover={{ bg: onHoverColor }}
                          bgGradient={buttonColor}
                          onClick={SendMail}
                          variant="solid"
                          fontWeight="medium"
                          color="white"
                          colorScheme="green"
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
      <Text fontSize={{ base: "sm", md: "18px" }}></Text>
    </Container>
  );
};

export default Contact;
