import React from 'react'
import { Box, VStack, Heading, Button } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

export default function TonalActivities() {
  const navigate = useNavigate()
  const { songId } = useParams()

  return (
    <Box p={8}>
      <Button onClick={() => navigate(`/songs/${songId}`)} mb={6}>
        Back to Song
      </Button>
      <Heading mb={6}>Tonal Activities</Heading>
      <VStack spacing={6} align="stretch">
        <Button
          size="lg"
          colorScheme="purple"
          onClick={() => navigate(`/songs/${songId}/activities/tonal/echo`)}
        >
          Be my Echo
        </Button>
        <Button
          size="lg"
          colorScheme="pink"
          onClick={() => navigate(`/songs/${songId}/activities/tonal/resting-tone`)}
        >
          Resting Tone
        </Button>
        <Button
          size="lg"
          colorScheme="cyan"
          onClick={() => navigate(`/songs/${songId}/activities/tonal/first-pitch`)}
        >
          First Pitch
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={() => navigate(`/songs/${songId}/activities/tonal/sing`)}
        >
          Sing a Song
        </Button>
      </VStack>
    </Box>
  )
} 