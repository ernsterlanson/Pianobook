import React from 'react'
import { Box, VStack, Heading, Button, AspectRatio } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

export default function FirstPitch() {
  const navigate = useNavigate()
  const { songId } = useParams()

  return (
    <Box p={8}>
      <Button onClick={() => navigate(`/songs/${songId}/activities/tonal`)} mb={6}>
        Back to Tonal Activities
      </Button>
      <Heading mb={6}>First Pitch</Heading>
      
      {/* Video Player Placeholder */}
      <Box mb={8}>
        <AspectRatio ratio={16 / 9}>
          <Box
            bg="gray.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.500"
            fontSize="lg"
          >
            Video Player Placeholder
          </Box>
        </AspectRatio>
      </Box>

      {/* Additional controls or content can be added here */}
    </Box>
  )
} 