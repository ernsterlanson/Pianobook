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

export default function UnitDetailPage() {
  const navigate = useNavigate()
  const { bookId, unitId } = useParams()
  const buttonBg = useColorModeValue('white', 'gray.700')
  const buttonHoverBg = useColorModeValue('gray.50', 'gray.600')
  const book = getBook(bookId || '')

  const getKeyboardDescription = (unitId: string) => {
    return 'practice the pieces of this unit'
  }

  const activities = [
    {
      id: 'sing',
      title: 'Song to Sing',
      description: 'Learn to sing a song',
      icon: '🎵'
    },
    {
      id: 'pattern',
      title: 'Pattern Play',
      description: 'Practice musical patterns from the unit',
      icon: '🎼'
    },
    {
      id: 'keyboard',
      title: 'Keyboard Play',
      description: getKeyboardDescription(unitId || ''),
      icon: '🎹'
    }
  ]

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
            onClick={() => navigate(`/books/${bookId}/units`)}
            mb={4}
          />
          <Heading size="2xl" color="brand.accent" mb={4}>
            {book.title} - Unit {unitId}
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Choose an activity to begin
          </Text>
        </Box>

        <SimpleGrid columns={[1, null, 3]} spacing={6}>
          {activities.map((activity) => (
            <Button
              key={activity.id}
              size="lg"
              height="150px"
              bg={buttonBg}
              borderRadius="xl"
              boxShadow="lg"
              transition="all 0.2s"
              _hover={{ bg: buttonHoverBg, transform: 'translateY(-2px)' }}
              onClick={() => navigate(`/books/${bookId}/unit/${unitId}/${activity.id}`)}
            >
              <VStack spacing={4}>
                <Text fontSize="4xl">{activity.icon}</Text>
                <Text fontSize="xl" fontWeight="bold">
                  {activity.title}
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  {activity.description}
                </Text>
              </VStack>
            </Button>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
} 