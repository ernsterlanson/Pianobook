import React from 'react'
import { Box, VStack, Heading, Button } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

export default function RhythmActivities() {
  const navigate = useNavigate()
  const { songId } = useParams()

  return (
    <Box p={8}>
      <Button onClick={() => navigate(`/songs/${songId}`)} mb={6}>
        Back to Song
      </Button>
      <Heading mb={6}>Rhythm Activities</Heading>
      <VStack spacing={6} align="stretch">
        <Button
          size="lg"
          colorScheme="orange"
          onClick={() => navigate(`/songs/${songId}/activities/rhythm/feel`)}
        >
          Feel the Beats
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={() => navigate(`/songs/${songId}/activities/rhythm/echo`)}
        >
          Be my Echo
        </Button>
        <Button
          size="lg"
          colorScheme="cyan"
          onClick={() => navigate(`/songs/${songId}/activities/rhythm/different`)}
        >
          Be Different
        </Button>
      </VStack>
    </Box>
  )
} 