import { Flex, Heading, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge } from '@chakra-ui/react'
import React from 'react'
import { UnlockIcon } from '@chakra-ui/icons';

function Navbar() {
  const toast = useToast();
  const showToast = () => {
    toast({
      title:'Logget out',
      description: 'Successfully logget out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />


    })
  }
  return (

    <Flex as='nav' p='10px' mb='40px' alignItems='center'>
        <Heading as='h1'>Laern Chakra UI </Heading>
        <Spacer/>

<HStack spacing='20px'>
  <Avatar src='/img/mario.png' bg='purple' name='error'> 
  <AvatarBadge width='1.3em' bg='teal.500'>
<Text fontSize='xs' color='white'>3</Text>
  </AvatarBadge>
  </Avatar>
        <Text>a_putra.16411059@student.ubl.ac.id</Text>
        <Button colorScheme='purple' onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
//    <Flex bg='gray.300' justify='space-between' wrap="wrap" gap="2">
//     <Box w='150px' h='50px' bg='blanchedalmond'>1</Box>
//     <Box w='150px' h='50px' bg='blue'>2</Box>
//     <Box w='150px' h='50px' flexGrow='1' bg='yellow'>3</Box>
//     <Box w='150px' h='50px'flexGrow='2' bg='black' color='white'>4</Box>

//    </Flex>
  )
}

export default Navbar
