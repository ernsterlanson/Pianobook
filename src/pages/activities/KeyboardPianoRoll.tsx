import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  VStack,
  Heading,
  Text,
  IconButton,
  Container,
  AspectRatio,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getBook } from '../../data/books'

export default function KeyboardPianoRoll() {
  const navigate = useNavigate()
  const { bookId, unitId, songId, mode, part } = useParams()
  const book = getBook(bookId || '')

  const getSongTitle = (songId: string) => {
    if (songId === 'popcorn') {
      return 'Popcorn'
    }
    return 'Song'
  }

  const getPageTitle = () => {
    if (mode === 'tutorial') {
      const partText = {
        'student': 'Student Part',
        'duet': 'Duet Part',
        'both': 'Both Parts Together'
      }[part || ''] || 'Tutorial'
      return `Tutorial: ${getSongTitle(songId || '')} - ${partText}`
    }
    return `${getSongTitle(songId || '')} - Complete Song`
  }

  const getBackUrl = () => {
    if (mode === 'tutorial') {
      return `/books/${bookId}/unit/${unitId}/keyboard/${songId}/tutorial`
    }
    return `/books/${bookId}/unit/${unitId}/keyboard/${songId}`
  }

  // This would come from your data/API
  const getVideoUrl = () => {
    if (mode === 'tutorial') {
      return `/videos/units/${unitId}/keyboard/${songId}/${part}.mp4`
    }
    return `/videos/units/${unitId}/keyboard/${songId}/complete.mp4`
  }

  return (
    <Container maxW="container.md" p={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <IconButton
            aria-label="Go back"
            icon={<ChevronLeftIcon />}
            onClick={() => navigate(getBackUrl())}
            mb={4}
          />
          <Heading size="xl" mb={4}>
            {getPageTitle()}
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
              Watch the piano roll and play along
            </Text>
            
            <AspectRatio ratio={16 / 9}>
              <Box 
                border="1px" 
                borderColor="gray.200" 
                borderRadius="md" 
                overflow="hidden"
              >
                <video
                  controls
                  style={{ width: '100%', height: '100%' }}
                  src={getVideoUrl()}
                >
                  Your browser does not support the video element.
                </video>
              </Box>
            </AspectRatio>

            <Text fontSize="sm" color="gray.600">
              Note: Piano roll video will be loaded here. For now, this is a placeholder.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
} 