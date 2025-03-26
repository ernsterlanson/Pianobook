import React from 'react'
import { Box, VStack, Heading, Button, Text, Image, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Box 
      p={8} 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      bg="white"
    >
      <VStack spacing={8} maxW="800px" w="100%" textAlign="center">
        <Heading 
          size="2xl" 
          mb={2}
          fontFamily="serif"
          color="black"
        >
          Keyboard Games
        </Heading>
        
        <Text 
          fontSize="2xl" 
          color="blue.600" 
          fontStyle="italic"
          mb={4}
        >
          Music Moves for Piano
        </Text>
        
        <Box 
          w="100%" 
          h="200px" 
          bg="red.700" 
          position="relative" 
          borderRadius="md"
          mb={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* This represents the dancing figures silhouette */}
          <Text color="white" fontSize="sm">Dancing Figures Placeholder</Text>
        </Box>

        <Heading 
          color="red.700" 
          size="xl"
          mb={4}
        >
          Book A
        </Heading>

        <Text mb={2}>By Marilyn Lowe</Text>
        <Text fontSize="sm" mb={6}>In Cooperation with Edwin E. Gordon</Text>

        <HStack spacing={4} justify="center">
          <Button
            size="lg"
            colorScheme="green"
            onClick={() => navigate('/songs/1')}
            w="200px"
          >
            Start Playing
          </Button>
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => navigate('/songs')}
            w="200px"
            variant="outline"
          >
            Browse All Songs
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
} 