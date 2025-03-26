import React from 'react'
import { Box, VStack, Heading, Button, AspectRatio, Text, Icon } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaMusic, FaHeadphones } from 'react-icons/fa'

export default function Listen() {
  const navigate = useNavigate()
  const { songId } = useParams()

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Button 
        onClick={() => navigate(`/songs/${songId}/activities/play`)} 
        mb={6}
        leftIcon={<Icon as={FaMusic} />}
        colorScheme="brand.primary"
      >
        Back to Play Options
      </Button>
      <Heading 
        mb={8} 
        color="brand.primary"
        textAlign="center"
        fontSize="3xl"
      >
        Listen to the Song 🎧
      </Heading>
      
      {/* Audio Player */}
      <Box mb={8}>
        <AspectRatio ratio={16 / 2}>
          <Box
            bg="white"
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="brand.primary"
            fontSize="xl"
            boxShadow="lg"
            border="4px solid"
            borderColor="brand.accent"
          >
            <Icon as={FaHeadphones} mr={4} />
            Audio Player Placeholder
          </Box>
        </AspectRatio>
      </Box>

      <Text 
        textAlign="center" 
        color="gray.600"
        fontSize="lg"
      >
        Put on your headphones and enjoy the music! 🎵
      </Text>
    </Box>
  )
} 