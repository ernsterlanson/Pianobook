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
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getBook } from '../../data/books'

export default function PatternPlay() {
  const navigate = useNavigate()
  const { bookId, unitId } = useParams()
  const book = getBook(bookId || '')

  // This would come from your data/API
  const getAudioUrl = (unitId: string) => {
    return `/audio/units/${unitId}/pattern-play.mp3` // Placeholder URL structure
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
              Listen and practice the musical patterns
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
                src={getAudioUrl(unitId || '')}
              >
                Your browser does not support the audio element.
              </audio>
            </Box>

            <Text fontSize="sm" color="gray.600">
              Note: Audio content will be loaded here. For now, this is a placeholder.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
} 