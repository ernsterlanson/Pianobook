import React from 'react'
import { Box, VStack, Heading, Button } from '@chakra-ui/react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { songs } from '../../../data/songs'

export default function SongPage() {
  const navigate = useNavigate()
  const { songId } = useParams()
  
  // Find the song based on the ID
  const song = songs.find(s => s.id === Number(songId))
  
  // If song not found, redirect to songs list
  if (!song) {
    return <Navigate to="/songs" />
  }

  return (
    <Box p={8}>
      <Button onClick={() => navigate('/songs')} mb={6}>
        Back to Songs
      </Button>
      <Heading mb={6}>{song.title}</Heading>
      <VStack spacing={6} align="stretch">
        <Button
          size="lg"
          colorScheme="blue"
          onClick={() => navigate(`/songs/${songId}/activities/rhythm`)}
        >
          Rhythm Activities
        </Button>
        <Button
          size="lg"
          colorScheme="purple"
          onClick={() => navigate(`/songs/${songId}/activities/tonal`)}
        >
          Tonal Activities
        </Button>
        <Button
          size="lg"
          colorScheme="green"
          onClick={() => navigate(`/songs/${songId}/activities/play`)}
        >
          Play the Song
        </Button>
      </VStack>
    </Box>
  )
} 