import React from 'react'
import { Box, VStack, Heading, Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { songs } from '../data/songs'

export default function Songs() {
  const navigate = useNavigate()

  return (
    <Box p={8}>
      <Button onClick={() => navigate('/')} mb={6}>
        Back to Home
      </Button>
      <Heading mb={6}>Choose a Song</Heading>
      <VStack spacing={4} align="stretch">
        {songs.map((song) => (
          <Button
            key={song.id}
            onClick={() => navigate(`/songs/${song.id}`)}
            isDisabled={!song.unlocked}
            colorScheme={song.unlocked ? "green" : "gray"}
            size="lg"
          >
            {song.title}
            {!song.unlocked && <Text fontSize="sm">(Locked)</Text>}
          </Button>
        ))}
      </VStack>
    </Box>
  )
} 