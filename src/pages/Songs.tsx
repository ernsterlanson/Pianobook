import React from 'react'
import { Box, VStack, Heading, Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const songList = [
  { id: 1, title: "The Woodpecker", unlocked: true },
  { id: 2, title: "The Apple and the Worm", unlocked: true },
  { id: 3, title: "Silly Silly", unlocked: true },
  { id: 4, title: "London Bridge", unlocked: true },
  { id: 5, title: "Donkey Ride", unlocked: true },
  { id: 6, title: "The Jack O' Lantern", unlocked: true },
  { id: 7, title: "Jumping Beans", unlocked: true },
  { id: 8, title: "Floating Clouds", unlocked: true },
  { id: 9, title: "Looby Lou", unlocked: true },
  { id: 10, title: "The Turtle. The Rabbit.", unlocked: true },
  { id: 11, title: "Climbing the Mountain", unlocked: true },
  { id: 12, title: "Circles", unlocked: true },
  { id: 13, title: "Old MacDonald", unlocked: true },
  { id: 14, title: "The Waterfall", unlocked: true },
  { id: 15, title: "Snowflakes", unlocked: true },
  { id: 16, title: "Row, Row, Row Your Boat", unlocked: true },
  { id: 17, title: "Bike Ride", unlocked: true },
  { id: 18, title: "The Race Car", unlocked: true },
  { id: 19, title: "If You're Happy and You Know It", unlocked: true },
  { id: 20, title: "Stuck", unlocked: true },
  { id: 21, title: "The Green Caterpillar", unlocked: true },
  { id: 22, title: "T-Rex", unlocked: true },
  { id: 23, title: "The Merry-Go-Round", unlocked: true },
  { id: 24, title: "The Farmer in the Dell", unlocked: true },
  { id: 25, title: "The Whale Shark", unlocked: true },
  { id: 26, title: "Holiday Bells", unlocked: true },
  { id: 27, title: "Raindrops", unlocked: true },
  { id: 28, title: "Turkey Gobbler", unlocked: true },
  { id: 29, title: "Twinkle, Twinkle, Little Star", unlocked: true }
]

export default function Songs() {
  const navigate = useNavigate()

  return (
    <Box p={8}>
      <Button onClick={() => navigate('/')} mb={6}>
        Back to Home
      </Button>
      <Heading mb={6}>Choose a Song</Heading>
      <VStack spacing={4} align="stretch">
        {songList.map((song) => (
          <Button
            key={song.id}
            onClick={() => navigate(`/song/${song.id}`)}
            isDisabled={!song.unlocked}
            colorScheme={song.unlocked ? "green" : "gray"}
            size="lg"
          >
            {song.title}
            {!song.unlocked && <Text fontSize="sm">(Locked)</Text>}
          </Button>
        ))}
      </VStack>
    </Box>
  )
} 