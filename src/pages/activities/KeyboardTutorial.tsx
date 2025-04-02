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
import { FaUser, FaUsers, FaLayerGroup } from 'react-icons/fa'
import { getBook } from '../../data/books'

export default function KeyboardTutorial() {
  const navigate = useNavigate()
  const { bookId, unitId, songId } = useParams()
  const book = getBook(bookId || '')

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
            onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard/${songId}`)}
            mb={4}
          />
          <Heading size="xl" mb={4}>
            Tutorial: {getSongTitle(songId || '')}
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
              Choose which part you want to learn
            </Text>
            
            <Button
              size="lg"
              height="100px"
              colorScheme="teal"
              onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard/${songId}/tutorial/student`)}
              leftIcon={<Icon as={FaUser} boxSize={6} />}
            >
              <VStack spacing={2} align="start">
                <Text fontSize="xl">Student Part</Text>
                <Text fontSize="sm" color="gray.100">
                  Learn your part of the song
                </Text>
              </VStack>
            </Button>

            <Button
              size="lg"
              height="100px"
              colorScheme="orange"
              onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard/${songId}/tutorial/duet`)}
              leftIcon={<Icon as={FaUsers} boxSize={6} />}
            >
              <VStack spacing={2} align="start">
                <Text fontSize="xl">Duet Part</Text>
                <Text fontSize="sm" color="gray.100">
                  Learn the teacher's part
                </Text>
              </VStack>
            </Button>

            <Button
              size="lg"
              height="100px"
              colorScheme="purple"
              onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard/${songId}/tutorial/both`)}
              leftIcon={<Icon as={FaLayerGroup} boxSize={6} />}
            >
              <VStack spacing={2} align="start">
                <Text fontSize="xl">Both Parts Together</Text>
                <Text fontSize="sm" color="gray.100">
                  See how both parts fit together
                </Text>
              </VStack>
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
} 