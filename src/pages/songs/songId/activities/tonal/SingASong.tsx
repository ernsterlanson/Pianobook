import React, { useState } from 'react'
import { Box, VStack, Heading, Button, AspectRatio, IconButton, HStack } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaPlay, FaPause, FaBackward } from 'react-icons/fa'

export default function SingASong() {
  const navigate = useNavigate()
  const { songId } = useParams()
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio] = useState(new Audio(`/audio/units/${songId}/song-to-sing/song-to-sing-unit${songId}.mp3`))

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <Box p={8}>
      <Button onClick={() => navigate(`/songs/${songId}/activities/tonal`)} mb={6}>
        Back to Tonal Activities
      </Button>
      <Heading mb={6}>Sing a Song</Heading>
      
      {/* Audio Player */}
      <Box mb={8} p={4} bg="gray.50" borderRadius="md">
        <VStack spacing={4}>
          <Heading size="md">Listen and Sing Along</Heading>
          <HStack spacing={4}>
            <IconButton
              aria-label="Play/Pause"
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={togglePlay}
              colorScheme="blue"
              size="lg"
            />
            <IconButton
              aria-label="Restart"
              icon={<FaBackward />}
              onClick={() => {
                audio.currentTime = 0
                if (!isPlaying) {
                  audio.play()
                  setIsPlaying(true)
                }
              }}
              colorScheme="blue"
              size="lg"
            />
          </HStack>
        </VStack>
      </Box>

      {/* Video Player Placeholder */}
      <Box mb={8}>
        <AspectRatio ratio={16 / 9}>
          <Box
            bg="gray.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.500"
            fontSize="lg"
          >
            Video Player Placeholder
          </Box>
        </AspectRatio>
      </Box>

      {/* Additional controls or content can be added here */}
    </Box>
  )
} 