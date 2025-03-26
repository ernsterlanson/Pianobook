import React from 'react'
import { Box, VStack, Heading, Button, AspectRatio, Text, Icon } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaMusic, FaPlay } from 'react-icons/fa'

export default function Prepare() {
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
        color="brand.secondary"
        textAlign="center"
        fontSize="3xl"
      >
        Keyboard Preparation 🎹
      </Heading>
      
      {/* Video Player */}
      <Box mb={8}>
        <AspectRatio ratio={16 / 9}>
          <Box
            bg="white"
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="brand.secondary"
            fontSize="xl"
            boxShadow="lg"
            border="4px solid"
            borderColor="brand.accent"
          >
            <Icon as={FaPlay} mr={4} />
            Video Player Placeholder
          </Box>
        </AspectRatio>
      </Box>

      <Text 
        textAlign="center" 
        color="gray.600"
        fontSize="lg"
      >
        Watch and learn how to prepare your fingers! 🎯
      </Text>
    </Box>
  )
} 