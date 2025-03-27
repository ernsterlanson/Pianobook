import React from 'react'
import { Box, VStack, Heading, Button, Text, Icon } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaMusic, FaDrum, FaSync, FaRandom } from 'react-icons/fa'

export default function RhythmActivities() {
  const navigate = useNavigate()
  const { songId } = useParams()

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Button 
        onClick={() => navigate(`/songs/${songId}`)} 
        mb={6}
        leftIcon={<Icon as={FaMusic} />}
        colorScheme="blue"
      >
        Back to Song
      </Button>
      <Heading 
        mb={8} 
        color="brand.primary"
        textAlign="center"
        fontSize="3xl"
      >
        Rhythm Activities 🥁
      </Heading>
      <VStack spacing={6} align="stretch">
        <Button
          size="lg"
          colorScheme="orange"
          onClick={() => navigate(`/songs/${songId}/activities/rhythm/feel`)}
          leftIcon={<Icon as={FaDrum} />}
          height="80px"
          fontSize="xl"
        >
          Feel the Beats
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={() => navigate(`/songs/${songId}/activities/rhythm/echo`)}
          leftIcon={<Icon as={FaSync} />}
          height="80px"
          fontSize="xl"
        >
          Be my Echo
        </Button>
        <Button
          size="lg"
          colorScheme="cyan"
          onClick={() => navigate(`/songs/${songId}/activities/rhythm/different`)}
          leftIcon={<Icon as={FaRandom} />}
          height="80px"
          fontSize="xl"
        >
          Be Different
        </Button>
      </VStack>
      <Text 
        mt={8} 
        textAlign="center" 
        color="gray.600"
        fontSize="lg"
      >
        Choose an activity to practice rhythm! 🎵
      </Text>
    </Box>
  )
} 