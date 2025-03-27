import React from 'react'
import { Box, VStack, Heading, Button, Text, Icon } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaMusic, FaKeyboard, FaGraduationCap } from 'react-icons/fa'

export default function PlaySong() {
  const navigate = useNavigate()
  const { songId } = useParams()

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Button 
        onClick={() => navigate(`/songs/${songId}`)} 
        mb={6}
        leftIcon={<Icon as={FaMusic} />}
        colorScheme="red"
      >
        Back to Song
      </Button>
      <Heading 
        mb={8} 
        color="brand.primary"
        textAlign="center"
        fontSize="3xl"
      >
        Let's Play Music! 🎵
      </Heading>
      <VStack spacing={6} align="stretch">
        <Button
          size="lg"
          colorScheme="red"
          onClick={() => navigate(`/songs/${songId}/activities/play/listen`)}
          leftIcon={<Icon as={FaMusic} />}
          height="80px"
          fontSize="xl"
        >
          Listen to the Song
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={() => navigate(`/songs/${songId}/activities/play/prepare`)}
          leftIcon={<Icon as={FaKeyboard} />}
          height="80px"
          fontSize="xl"
        >
          Keyboard Preparation
        </Button>
        <Button
          size="lg"
          colorScheme="yellow"
          onClick={() => navigate(`/songs/${songId}/activities/play/perform`)}
          leftIcon={<Icon as={FaGraduationCap} />}
          height="80px"
          fontSize="xl"
        >
          Song Tutorial
        </Button>
      </VStack>
      <Text 
        mt={8} 
        textAlign="center" 
        color="gray.600"
        fontSize="lg"
      >
        Choose an activity to start learning! 🎹
      </Text>
    </Box>
  )
} 