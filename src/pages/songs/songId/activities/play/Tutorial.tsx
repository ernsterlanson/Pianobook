import React from 'react'
import { Box, VStack, Heading, Button, AspectRatio, Grid, GridItem, Text, Icon } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaMusic, FaPlay, FaKeyboard } from 'react-icons/fa'

export default function Tutorial() {
  const navigate = useNavigate()
  const { songId } = useParams()

  return (
    <Box p={8} maxW="1000px" mx="auto">
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
        color="brand.accent"
        textAlign="center"
        fontSize="3xl"
      >
        Song Tutorial 🎼
      </Heading>
      
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        {/* Video Player */}
        <GridItem>
          <AspectRatio ratio={16 / 9}>
            <Box
              bg="white"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="brand.accent"
              fontSize="xl"
              boxShadow="lg"
              border="4px solid"
              borderColor="brand.accent"
            >
              <Icon as={FaPlay} mr={4} />
              Video Player Placeholder
            </Box>
          </AspectRatio>
        </GridItem>

        {/* Piano Roll */}
        <GridItem>
          <AspectRatio ratio={16 / 4}>
            <Box
              bg="white"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="brand.accent"
              fontSize="xl"
              boxShadow="lg"
              border="4px solid"
              borderColor="brand.accent"
            >
              <Icon as={FaKeyboard} mr={4} />
              Piano Roll Placeholder
            </Box>
          </AspectRatio>
        </GridItem>
      </Grid>

      <Text 
        mt={8}
        textAlign="center" 
        color="gray.600"
        fontSize="lg"
      >
        Follow along with the video and piano roll to learn the song! 🎹
      </Text>
    </Box>
  )
} 