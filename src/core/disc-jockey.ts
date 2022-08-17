import { SongInfo } from "./song-info";
import { SongIterator } from "./song-interator";
import { SongsOfThe70s } from "./songs-of-70s";
import { SongsOfThe80s } from "./songs-of-80s";
import { SongsOfThe90s } from "./songs-of-90s";

export class DiscJockey {


  constructor(
    private iter70sSongs: SongIterator,
    private iter80sSongs: SongIterator,
    private iter90sSongs: SongIterator
  ) {
  }

  showTheSongs() {
    this.printSongs(this.iter70sSongs.createIterator(), 'Songs of the 70s');
    this.printSongs(this.iter80sSongs.createIterator(), 'Songs of the 80s')
    this.printSongs(this.iter90sSongs.createIterator(), 'Songs of the 90s')
  }

  printSongs(songs: Iterable<SongInfo>, title: string) {
    console.log('\n');
    console.log(title);
    for (let song of songs) {
      const { songName, bandName, yearReleased } = song;
      console.log('----')
      console.log(`Name: ${songName}`);
      console.log(`Band: ${bandName}`);
      console.log(`Year: ${yearReleased}`);
      console.log('')

    }
  }
}