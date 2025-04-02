import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Button,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getBook } from '../data/books'

export default function UnitPage() {
  const navigate = useNavigate()
  const { bookId } = useParams()
  const buttonBg = useColorModeValue('white', 'gray.700')
  const buttonHoverBg = useColorModeValue('gray.50', 'gray.600')
  const book = getBook(bookId || '')

  const units = Array.from({ length: 20 }, (_, i) => i + 1)

  if (!book) {
    return (
      <VStack p={8} spacing={4}>
        <Heading>Book Not Found</Heading>
        <Button onClick={() => navigate('/')}>Return Home</Button>
      </VStack>
    )
  }

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <VStack spacing={8} align="stretch">
        <Box>
          <IconButton
            aria-label="Go back"
            icon={<ChevronLeftIcon />}
            onClick={() => navigate('/')}
            mb={4}
          />
          <Heading size="2xl" color="brand.accent" mb={4}>
            {book.title}
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Select a unit to begin
          </Text>
        </Box>

        <SimpleGrid columns={[2, null, 4, 5]} spacing={4}>
          {units.map((unit) => (
            <Button
              key={unit}
              size="lg"
              height="100px"
              bg={buttonBg}
              borderRadius="xl"
              boxShadow="lg"
              transition="all 0.2s"
              _hover={{ bg: buttonHoverBg, transform: 'translateY(-2px)' }}
              onClick={() => navigate(`/books/${bookId}/unit/${unit}`)}
            >
              <VStack spacing={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Unit {unit}
                </Text>
              </VStack>
            </Button>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
} 