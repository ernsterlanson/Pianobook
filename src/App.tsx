import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import theme from './theme'
import Home from './pages/Home'
import Songs from './pages/Songs'
import SongPage from './pages/songs/songId/SongPage'
import RhythmActivities from './pages/songs/songId/activities/rhythm/RhythmActivities'
import FeelTheBeats from './pages/songs/songId/activities/rhythm/FeelTheBeats'
import TonalActivities from './pages/songs/songId/activities/tonal/TonalActivities'
import PlaySong from './pages/songs/songId/activities/play/PlaySong'
import Listen from './pages/songs/songId/activities/play/Listen'
import Prepare from './pages/songs/songId/activities/play/Prepare'
import Tutorial from './pages/songs/songId/activities/play/Tutorial'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        bg="brand.background"
        bgImage="url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FF6B6B\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/songs/:songId" element={<SongPage />} />
            
            {/* Rhythm Activity Routes */}
            <Route path="/songs/:songId/activities/rhythm" element={<RhythmActivities />} />
            <Route path="/songs/:songId/activities/rhythm/feel" element={<FeelTheBeats />} />
            <Route path="/songs/:songId/activities/rhythm/echo" element={<RhythmActivities />} />
            <Route path="/songs/:songId/activities/rhythm/different" element={<RhythmActivities />} />
            
            {/* Tonal Activity Routes */}
            <Route path="/songs/:songId/activities/tonal" element={<TonalActivities />} />
            <Route path="/songs/:songId/activities/tonal/echo" element={<TonalActivities />} />
            <Route path="/songs/:songId/activities/tonal/resting-tone" element={<TonalActivities />} />
            <Route path="/songs/:songId/activities/tonal/first-pitch" element={<TonalActivities />} />
            <Route path="/songs/:songId/activities/tonal/sing" element={<TonalActivities />} />
            
            {/* Play Song Routes */}
            <Route path="/songs/:songId/activities/play" element={<PlaySong />} />
            <Route path="/songs/:songId/activities/play/listen" element={<Listen />} />
            <Route path="/songs/:songId/activities/play/prepare" element={<Prepare />} />
            <Route path="/songs/:songId/activities/play/perform" element={<Tutorial />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  )
}

export default App 