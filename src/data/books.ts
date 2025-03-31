import { songs } from './songs'

export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  songs: typeof songs;
}

export const books: Book[] = [
  {
    id: 'keyboard-games-a',
    title: 'Keyboard Games A',
    description: 'A comprehensive piano method for young beginners',
    coverImage: '/books/keyboard-games-a/cover.jpg',
    songs: songs
  },
  {
    id: 'musicmoves-piano-1',
    title: 'Music Moves Piano Book 1',
    description: 'First book in the Music Moves series',
    coverImage: '/books/musicmoves-piano-1/cover.jpg',
    songs: [] // To be filled with songs for this book
  }
];

export const getBook = (bookId: string): Book | undefined => {
  return books.find(book => book.id === bookId);
};

export const getBookSong = (bookId: string, songId: string) => {
  const book = getBook(bookId);
  return book?.songs.find(song => song.id === Number(songId));
}; 