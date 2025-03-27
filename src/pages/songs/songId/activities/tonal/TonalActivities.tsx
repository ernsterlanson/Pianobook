import React from 'react'
import { Box, VStack, Heading, Button, Text, Icon } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaMusic, FaSync, FaBullseye, FaArrowUp, FaMicrophone } from 'react-icons/fa'

export default function TonalActivities() {
  const navigate = useNavigate()
  const { songId } = useParams()

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Button 
        onClick={() => navigate(`/songs/${songId}`)} 
        mb={6}
        leftIcon={<Icon as={FaMusic} />}
        colorScheme="purple"
      >
        Back to Song
      </Button>
      <Heading 
        mb={8} 
        color="brand.primary"
        textAlign="center"
        fontSize="3xl"
      >
        Tonal Activities 🎵
      </Heading>
      <VStack spacing={6} align="stretch">
        <Button
          size="lg"
          colorScheme="purple"
          onClick={() => navigate(`/songs/${songId}/activities/tonal/echo`)}
          leftIcon={<Icon as={FaSync} />}
          height="80px"
          fontSize="xl"
        >
          Be my Echo
        </Button>
        <Button
          size="lg"
          colorScheme="pink"
          onClick={() => navigate(`/songs/${songId}/activities/tonal/resting-tone`)}
          leftIcon={<Icon as={FaBullseye} />}
          height="80px"
          fontSize="xl"
        >
          Resting Tone
        </Button>
        <Button
          size="lg"
          colorScheme="cyan"
          onClick={() => navigate(`/songs/${songId}/activities/tonal/first-pitch`)}
          leftIcon={<Icon as={FaArrowUp} />}
          height="80px"
          fontSize="xl"
        >
          First Pitch
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={() => navigate(`/songs/${songId}/activities/tonal/sing`)}
          leftIcon={<Icon as={FaMicrophone} />}
          height="80px"
          fontSize="xl"
        >
          Sing a Song
        </Button>
      </VStack>
      <Text 
        mt={8} 
        textAlign="center" 
        color="gray.600"
        fontSize="lg"
      >
        Choose an activity to practice singing! 🎤
      </Text>
    </Box>
  )
} 