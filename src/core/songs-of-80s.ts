import { ISongs } from "./ISongs";
import { SongInfo } from "./song-info";
import { SongIterator } from "./song-interator";

export class SongsOfThe80s implements ISongs, SongIterator {
  private bestSongs: SongInfo[];

  constructor() {
    this.bestSongs = [];

    this.addSong("Roam", "B52s", 1989);
    this.addSong("Cruel Summer", "Bananarama", 1984);
    this.addSong("Head Over Heels", "Tears for Fears", 1985);
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