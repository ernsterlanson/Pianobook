import React from 'react'
import { Box, VStack, Heading, Button, Icon } from '@chakra-ui/react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { getBookSong } from '../../../data/books'

export default function SongPage() {
  const navigate = useNavigate()
  const { bookId, songId } = useParams()
  
  // Find the song based on the book and song ID
  const song = getBookSong(bookId || '', songId || '')
  
  // If song not found, redirect to book page
  if (!song) {
    return <Navigate to={`/books/${bookId}`} />
  }

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Button 
        onClick={() => navigate(`/books/${bookId}`)} 
        mb={6}
        leftIcon={<Icon as={FaArrowLeft} />}
        colorScheme="yellow"
      >
        Back to Songs
      </Button>
      <Heading mb={6} color="brand.accent" textAlign="center">{song.title}</Heading>
      <VStack spacing={6} align="stretch">
        <Button
          size="lg"
          colorScheme="blue"
          onClick={() => navigate(`/books/${bookId}/songs/${song.id}/activities/rhythm`)}
        >
          Rhythm Activities
        </Button>
        <Button
          size="lg"
          colorScheme="purple"
          onClick={() => navigate(`/books/${bookId}/songs/${song.id}/activities/tonal`)}
        >
          Tonal Activities
        </Button>
        <Button
          size="lg"
          colorScheme="green"
          onClick={() => navigate(`/books/${bookId}/songs/${song.id}/activities/play`)}
        >
          Play the Song
        </Button>
      </VStack>
    </Box>
  )
} 