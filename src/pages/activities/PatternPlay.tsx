import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  VStack,
  Heading,
  Text,
  IconButton,
  Container,
  Button,
  HStack,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FaPlay, FaPause, FaBackward } from 'react-icons/fa'
import { getBook } from '../../data/books'

export default function PatternPlay() {
  const navigate = useNavigate()
  const { bookId, unitId } = useParams()
  const book = getBook(bookId || '')
  const isUnit3 = unitId === '3'

  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const [audio1] = useState(new Audio(`/audio/units/${unitId}/pattern-play/pattern-play-unit${unitId}.mp3`))
  const [audio2] = useState(new Audio(`/audio/units/${unitId}/pattern-play/pattern-play-unit${unitId}-2.mp3`))

  const togglePlay1 = () => {
    if (isPlaying1) {
      audio1.pause()
    } else {
      audio1.play()
    }
    setIsPlaying1(!isPlaying1)
  }

  const togglePlay2 = () => {
    if (isPlaying2) {
      audio2.pause()
    } else {
      audio2.play()
    }
    setIsPlaying2(!isPlaying2)
  }

  const restartAudio1 = () => {
    audio1.currentTime = 0
    if (!isPlaying1) {
      audio1.play()
      setIsPlaying1(true)
    }
  }

  const restartAudio2 = () => {
    audio2.currentTime = 0
    if (!isPlaying2) {
      audio2.play()
      setIsPlaying2(true)
    }
  }

  return (
    <Container maxW="container.md" p={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <IconButton
            aria-label="Go back"
            icon={<ChevronLeftIcon />}
            onClick={() => navigate(`/books/${bookId}/unit/${unitId}`)}
            mb={4}
          />
          <Heading size="xl" mb={4}>
            Pattern Play - Unit {unitId}
          </Heading>
        </Box>

        <Box 
          bg="white" 
          p={6} 
          borderRadius="xl" 
          boxShadow="lg"
        >
          <VStack spacing={4} align="stretch">
            <Text fontSize="lg" mb={4}>
              Listen to these patterns and echo them with your voice
            </Text>
            
            {isUnit3 ? (
              <VStack spacing={6}>
                {/* First Pattern */}
                <Box 
                  border="1px" 
                  borderColor="gray.200" 
                  borderRadius="md" 
                  p={4}
                  w="100%"
                >
                  <VStack spacing={4}>
                    <Heading size="md">Pattern 1</Heading>
                    <HStack spacing={4}>
                      <IconButton
                        aria-label="Play/Pause 1"
                        icon={isPlaying1 ? <FaPause /> : <FaPlay />}
                        onClick={togglePlay1}
                        colorScheme="blue"
                        size="lg"
                      />
                      <IconButton
                        aria-label="Restart 1"
                        icon={<FaBackward />}
                        onClick={restartAudio1}
                        colorScheme="blue"
                        size="lg"
                      />
                    </HStack>
                  </VStack>
                </Box>

                {/* Second Pattern */}
                <Box 
                  border="1px" 
                  borderColor="gray.200" 
                  borderRadius="md" 
                  p={4}
                  w="100%"
                >
                  <VStack spacing={4}>
                    <Heading size="md">Pattern 2</Heading>
                    <HStack spacing={4}>
                      <IconButton
                        aria-label="Play/Pause 2"
                        icon={isPlaying2 ? <FaPause /> : <FaPlay />}
                        onClick={togglePlay2}
                        colorScheme="blue"
                        size="lg"
                      />
                      <IconButton
                        aria-label="Restart 2"
                        icon={<FaBackward />}
                        onClick={restartAudio2}
                        colorScheme="blue"
                        size="lg"
                      />
                    </HStack>
                  </VStack>
                </Box>
              </VStack>
            ) : (
              <Box 
                border="1px" 
                borderColor="gray.200" 
                borderRadius="md" 
                p={4}
              >
                <audio
                  controls
                  style={{ width: '100%' }}
                  src={`/audio/units/${unitId}/pattern-play/pattern-play-unit${unitId}.mp3`}
                >
                  Your browser does not support the audio element.
                </audio>
              </Box>
            )}
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
} 