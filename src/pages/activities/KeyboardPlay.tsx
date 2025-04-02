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
import { FaMusic } from 'react-icons/fa'
import { getBook } from '../../data/books'

export default function KeyboardPlay() {
  const navigate = useNavigate()
  const { bookId, unitId } = useParams()
  const book = getBook(bookId || '')

  const getUnitSongs = (unitId: string) => {
    if (unitId === '1') {
      return [
        {
          id: 'popcorn',
          title: 'Popcorn',
          description: 'A fun and bouncy piece to start your piano journey',
        }
      ]
    }
    return [] // For future units
  }

  const songs = getUnitSongs(unitId || '')

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
          <VStack spacing={6} align="stretch">
            <Text fontSize="lg" mb={4} textAlign="center">
              Choose a song to play
            </Text>
            
            {songs.map((song) => (
              <Button
                key={song.id}
                size="lg"
                height="100px"
                colorScheme="blue"
                onClick={() => navigate(`/books/${bookId}/unit/${unitId}/keyboard/${song.id}`)}
                leftIcon={<Icon as={FaMusic} boxSize={6} />}
              >
                <VStack spacing={2} align="start">
                  <Text fontSize="xl">{song.title}</Text>
                  <Text fontSize="sm" color="gray.100">
                    {song.description}
                  </Text>
                </VStack>
              </Button>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
} 