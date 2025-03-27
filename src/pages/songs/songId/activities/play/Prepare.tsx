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
        colorScheme="teal"
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
            bg="gray.100"
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.500"
            fontSize="xl"
            boxShadow="lg"
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