import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import theme from './theme'
import Home from './pages/Home'
import BookPage from './pages/BookPage'
import UnitPage from './pages/UnitPage'
import UnitDetailPage from './pages/UnitDetailPage'
import SongToSing from './pages/activities/SongToSing'
import PatternPlay from './pages/activities/PatternPlay'
import KeyboardPlay from './pages/activities/KeyboardPlay'
import KeyboardPlaySong from './pages/activities/KeyboardPlaySong'
import KeyboardTutorial from './pages/activities/KeyboardTutorial'
import KeyboardPianoRoll from './pages/activities/KeyboardPianoRoll'
import KeyboardListen from './pages/activities/KeyboardListen'
import SongPage from './pages/songs/songId/SongPage'
import RhythmActivities from './pages/songs/songId/activities/rhythm/RhythmActivities'
import FeelTheBeats from './pages/songs/songId/activities/rhythm/FeelTheBeats'
import BeMyEcho from './pages/songs/songId/activities/rhythm/BeMyEcho'
import BeDifferent from './pages/songs/songId/activities/rhythm/BeDifferent'
import TonalActivities from './pages/songs/songId/activities/tonal/TonalActivities'
import TonalBeMyEcho from './pages/songs/songId/activities/tonal/TonalBeMyEcho'
import RestingTone from './pages/songs/songId/activities/tonal/RestingTone'
import FirstPitch from './pages/songs/songId/activities/tonal/FirstPitch'
import SingASong from './pages/songs/songId/activities/tonal/SingASong'
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
            <Route path="/books/:bookId" element={<BookPage />} />
            <Route path="/books/:bookId/units" element={<UnitPage />} />
            <Route path="/books/:bookId/unit/:unitId" element={<UnitDetailPage />} />
            <Route path="/books/:bookId/unit/:unitId/sing" element={<SongToSing />} />
            <Route path="/books/:bookId/unit/:unitId/pattern" element={<PatternPlay />} />
            <Route path="/books/:bookId/unit/:unitId/keyboard" element={<KeyboardPlay />} />
            <Route path="/books/:bookId/unit/:unitId/keyboard/:songId" element={<KeyboardPlaySong />} />
            <Route path="/books/:bookId/unit/:unitId/keyboard/:songId/tutorial" element={<KeyboardTutorial />} />
            <Route path="/books/:bookId/unit/:unitId/keyboard/:songId/tutorial/:part" element={<KeyboardPianoRoll />} />
            <Route path="/books/:bookId/unit/:unitId/keyboard/:songId/listen" element={<KeyboardListen />} />
            <Route path="/books/:bookId/songs/:songId" element={<SongPage />} />
            
            {/* Rhythm Activity Routes */}
            <Route path="/books/:bookId/songs/:songId/activities/rhythm" element={<RhythmActivities />} />
            <Route path="/books/:bookId/songs/:songId/activities/rhythm/feel" element={<FeelTheBeats />} />
            <Route path="/books/:bookId/songs/:songId/activities/rhythm/echo" element={<BeMyEcho />} />
            <Route path="/books/:bookId/songs/:songId/activities/rhythm/different" element={<BeDifferent />} />
            
            {/* Tonal Activity Routes */}
            <Route path="/books/:bookId/songs/:songId/activities/tonal" element={<TonalActivities />} />
            <Route path="/books/:bookId/songs/:songId/activities/tonal/echo" element={<TonalBeMyEcho />} />
            <Route path="/books/:bookId/songs/:songId/activities/tonal/resting-tone" element={<RestingTone />} />
            <Route path="/books/:bookId/songs/:songId/activities/tonal/first-pitch" element={<FirstPitch />} />
            <Route path="/books/:bookId/songs/:songId/activities/tonal/sing" element={<SingASong />} />
            
            {/* Play Song Routes */}
            <Route path="/books/:bookId/songs/:songId/activities/play" element={<PlaySong />} />
            <Route path="/books/:bookId/songs/:songId/activities/play/listen" element={<Listen />} />
            <Route path="/books/:bookId/songs/:songId/activities/play/prepare" element={<Prepare />} />
            <Route path="/books/:bookId/songs/:songId/activities/play/perform" element={<Tutorial />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  )
}

export default App 