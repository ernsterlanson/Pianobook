import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  VStack,
  Heading,
  Text,
  IconButton,
  Container,
  Button,
  Icon,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FaGraduationCap, FaMusic } from 'react-icons/fa'
import { getBook } from '../../data/books'

export default function KeyboardPlaySong() {
  const navigate = useNavigate()
  const { bookId, unitId, songId } = useParams()
  const book = getBook(bookId || '')

  // This would come from your data/API
  const getVideoUrl = (unitId: string, songId: string) => {
    return `/videos/units/${unitId}/keyboard/${songId}.mp4` // Placeholder URL structure
  }

  const getSongTitle = (songId: string) => {
    if (songId === 'popcorn') {
      return 'Popcorn'
    }
    return 'Song'
  }

  return (
    <Container maxW="container.md" p={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <IconButton
            aria-label="Go back"
            icon={<ChevronLeftIcon />}
            onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard`)}
            mb={4}
          />
          <Heading size="xl" mb={4}>
            {getSongTitle(songId || '')} - Unit {unitId}
          </Heading>
        </Box>

        <Box 
          bg="white" 
          p={6} 
          borderRadius="xl" 
          boxShadow="lg"
        >
          <VStack spacing={6} align="stretch">
            <Text fontSize="lg" mb={4} textAlign="center">
              Choose how you want to learn
            </Text>
            
            <Button
              size="lg"
              height="100px"
              colorScheme="blue"
              onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard/${songId}/tutorial`)}
              leftIcon={<Icon as={FaGraduationCap} boxSize={6} />}
            >
              <VStack spacing={2} align="start">
                <Text fontSize="xl">Tutorial</Text>
                <Text fontSize="sm" color="gray.100">
                  Learn the song step by step
                </Text>
              </VStack>
            </Button>

            <Button
              size="lg"
              height="100px"
              colorScheme="purple"
              onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard/${songId}/listen`)}
              leftIcon={<Icon as={FaMusic} boxSize={6} />}
            >
              <VStack spacing={2} align="start">
                <Text fontSize="xl">Listen to the Song</Text>
                <Text fontSize="sm" color="gray.100">
                  Watch and listen to the complete song
                </Text>
              </VStack>
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
} 