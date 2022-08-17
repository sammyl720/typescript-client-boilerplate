import { ISongs } from "./ISongs";
import { SongInfo } from "./song-info";
import { SongIterator } from "./song-interator";

export class SongsOfThe70s implements ISongs, SongIterator {
  private bestSongs: SongInfo[];

  constructor() {
    this.bestSongs = [];

    this.addSong("Imagine", "John Lennon", 1971);
    this.addSong("American Pie", "Don McLean", 1971);
    this.addSong("I Will Survive", "Gloria Gaynor", 1979);
  }

  addSong(songName: string, songBand: string, songYear: number) {
    const songInfo = new SongInfo(songName, songBand, songYear);
    this.bestSongs.push(
      songInfo
    );
  }

  getBestSongs() {
    return this.bestSongs;
  }

  createIterator() {
    return this.bestSongs[Symbol.iterator]()
  }
}