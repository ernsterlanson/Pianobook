import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMusic, FaArrowLeft } from 'react-icons/fa';
import { getBook } from '../data/books';

export default function BookPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = getBook(bookId || '');

  useEffect(() => {
    // If this is Music Moves Piano Book 1, redirect to units page
    if (bookId === 'musicmoves-piano-1') {
      navigate(`/books/${bookId}/units`);
    }
  }, [bookId, navigate]);

  if (!book) {
    return (
      <VStack p={8} spacing={4}>
        <Heading>Book Not Found</Heading>
        <Button onClick={() => navigate('/')}>Return Home</Button>
      </VStack>
    );
  }

  const cardBg = useColorModeValue('white', 'gray.700');
  const cardHoverBg = useColorModeValue('gray.50', 'gray.600');

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Button
        onClick={() => navigate('/')}
        mb={6}
        leftIcon={<Icon as={FaArrowLeft} />}
        colorScheme="yellow"
      >
        Back to Books
      </Button>

      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" color="brand.accent" mb={4}>
            {book.title}
          </Heading>
          <Text fontSize="xl" color="gray.600">
            {book.description}
          </Text>
        </Box>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {book.songs.map((song) => (
            <Box
              key={song.id}
              p={6}
              bg={cardBg}
              borderRadius="xl"
              boxShadow="lg"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ bg: cardHoverBg, transform: 'translateY(-2px)' }}
              onClick={() => navigate(`/books/${bookId}/songs/${song.id}`)}
            >
              <VStack spacing={4} align="stretch">
                <Icon as={FaMusic} boxSize={8} color="brand.accent" />
                <Heading size="md">{song.title}</Heading>
                {song.unlocked ? (
                  <Text color="green.500">Unlocked</Text>
                ) : (
                  <Text color="gray.500">Locked</Text>
                )}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
} 