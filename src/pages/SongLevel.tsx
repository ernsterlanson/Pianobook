import React, { useEffect, useState } from 'react'
import { Box, VStack, Heading, Button, HStack } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import * as Tone from 'tone'

export default function SongLevel() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isPlaying, setIsPlaying] = useState(false)

  // Initialize Tone.js
  useEffect(() => {
    // Setup will go here
  }, [])

  const handlePlay = async () => {
    await Tone.start()
    setIsPlaying(true)
    // Play logic will go here
  }

  const handleStop = () => {
    setIsPlaying(false)
    // Stop logic will go here
  }

  return (
    <Box p={8}>
      <Button onClick={() => navigate('/')} mb={4}>
        Back to Songs
      </Button>
      
      <VStack spacing={6}>
        <Heading>Song Level {id}</Heading>
        
        {/* Piano Visualization will go here */}
        <Box w="100%" h="300px" bg="gray.100" borderRadius="md">
          Piano Visualization Placeholder
        </Box>
        
        {/* Controls */}
        <HStack spacing={4}>
          <Button
            colorScheme="green"
            onClick={isPlaying ? handleStop : handlePlay}
          >
            {isPlaying ? 'Stop' : 'Play'}
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
} 