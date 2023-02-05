import { HStack, IconButton, Stack, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'

import {AiFillGithub} from "react-icons/ai"
import {ImLinkedin2} from "react-icons/im"
import {FiGithub} from "react-icons/fi"

import { Link, NavLink } from 'react-router-dom'

const SocialHandle = () => {
  
  const buttonColor = useColorModeValue('#80ed99', 'linear(to-b, #ffdda1, #b07844)')
  // const onHoverColor = useColorModeValue('#af0e0e', '#835d3b')

  return (
        <VStack position="fixed"
        zIndex={999}
         bottom={{base:"none",sm:5,md:20,lg:5}}
         left={{base:"none",sm:5,md:5,lg:5}} >
     
          <a  href="https://github.com/lipan1437" target="_blank" >
             <IconButton 
             display={{base:"none", md:"-webkit-inline-flex"}}  
             size="md"
             borderRadius="20px"
               fontSize="4xl"
               colorScheme = "blue"
               bgGradient={buttonColor} 
               icon={<AiFillGithub />}
             />
          </a>
          <a  href="https://www.linkedin.com/in/lipan-padhan-a0bb381a5/" target="_blank" >
             <IconButton 
             display={{base:"none", md:"-webkit-inline-flex"}}  size="md"
             borderRadius="20px"
               fontSize="xl"
              
               bgGradient={buttonColor} 
               colorScheme="blue"
               icon={<ImLinkedin2 />}
             />
          </a>
          
     
     </VStack>
  )
}

export default SocialHandle
