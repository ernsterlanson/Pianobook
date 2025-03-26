import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#FF6B6B',    // Playful coral
      secondary: '#4ECDC4',  // Fresh teal
      accent: '#FFE66D',     // Sunny yellow
      background: '#F7F7F7', // Light gray
      text: '#2D3748',       // Dark gray
    },
  },
  fonts: {
    heading: '"Comic Sans MS", cursive, sans-serif',
    body: '"Comic Sans MS", cursive, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    Box: {
      baseStyle: {
        borderRadius: 'xl',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.background',
        color: 'brand.text',
      },
    },
  },
})

export default theme 