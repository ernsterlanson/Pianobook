import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  VStack,
  Heading,
  Text,
  IconButton,
  Container,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getBook } from '../../data/books'

export default function KeyboardListen() {
  const navigate = useNavigate()
  const { bookId, unitId, songId } = useParams()
  const book = getBook(bookId || '')

  const getSongTitle = (songId: string) => {
    if (songId === 'popcorn') {
      return 'Popcorn'
    }
    return 'Song'
  }

  // This would come from your data/API
  const getAudioUrl = () => {
    return `/audio/units/${unitId}/keyboard/${songId}/complete.mp3`
  }

  return (
    <Container maxW="container.md" p={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <IconButton
            aria-label="Go back"
            icon={<ChevronLeftIcon />}
            onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard/${songId}`)}
            mb={4}
          />
          <Heading size="xl" mb={4}>
            {getSongTitle(songId || '')} - Complete Song
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
              Listen to the complete song
            </Text>
            
            <Box 
              border="1px" 
              borderColor="gray.200" 
              borderRadius="md" 
              p={4}
            >
              <audio
                controls
                style={{ width: '100%' }}
                src={getAudioUrl()}
              >
                Your browser does not support the audio element.
              </audio>
            </Box>

            <Text fontSize="sm" color="gray.600">
              Note: Audio file will be loaded here. For now, this is a placeholder.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
} 