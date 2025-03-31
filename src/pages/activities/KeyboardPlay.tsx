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

export default function KeyboardPlay() {
  const navigate = useNavigate()
  const { bookId, unitId } = useParams()
  const book = getBook(bookId || '')

  // This would come from your data/API
  const getVideoUrl = (unitId: string) => {
    return `/videos/units/${unitId}/piano-roll.mp4` // Placeholder URL structure
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
            Keyboard Play - Unit {unitId}
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
                  src={getVideoUrl(unitId || '')}
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