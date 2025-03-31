import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { books } from '../data/books'

export default function Home() {
  const navigate = useNavigate()
  const cardBg = useColorModeValue('white', 'gray.700')
  const cardHoverBg = useColorModeValue('gray.50', 'gray.600')

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" color="brand.accent" mb={4}>
            Piano Learning Journey
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Choose your piano book to begin
          </Text>
        </Box>

        <SimpleGrid columns={[1, null, 2]} spacing={8}>
          {books.map((book) => (
            <Box
              key={book.id}
              p={6}
              bg={cardBg}
              borderRadius="xl"
              boxShadow="lg"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ bg: cardHoverBg, transform: 'translateY(-2px)' }}
              onClick={() => navigate(`/books/${book.id}`)}
            >
              <VStack spacing={4} align="stretch">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  borderRadius="md"
                  fallbackSrc="https://via.placeholder.com/300x400?text=Book+Cover"
                />
                <Heading size="lg">{book.title}</Heading>
                <Text color="gray.600">{book.description}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
} 