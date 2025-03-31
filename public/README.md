# Media Files Directory Structure

This directory contains all the media files for the application.

## Structure

```
public/
├── audio/
│   └── units/
│       ├── 1/
│       │   ├── song-to-sing.mp3    # Song for Unit 1
│       │   └── pattern-play.mp3    # Pattern practice for Unit 1
│       └── 2/
│           ├── song-to-sing.mp3    # Song for Unit 2
│           └── pattern-play.mp3    # Pattern practice for Unit 2
└── videos/
    └── units/
        ├── 1/
        │   └── piano-roll.mp4      # Piano roll video for Unit 1
        └── 2/
            └── piano-roll.mp4      # Piano roll video for Unit 2
```

## File Naming Convention

1. Audio Files:
   - Songs: `song-to-sing.mp3`
   - Patterns: `pattern-play.mp3`

2. Video Files:
   - Piano Roll: `piano-roll.mp4`

## Adding New Units

To add media for a new unit:

1. Create new directories:
   ```bash
   mkdir -p public/audio/units/<unit-number>
   mkdir -p public/videos/units/<unit-number>
   ```

2. Add the required media files following the naming convention above. 