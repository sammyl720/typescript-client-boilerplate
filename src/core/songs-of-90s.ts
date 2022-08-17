import { ISongs } from "./ISongs";
import { SongInfo } from "./song-info";
import { SongIterator } from "./song-interator";

export class SongsOfThe90s implements ISongs, SongIterator {
  private bestSongs: Map<number, SongInfo>;

  private key = 0;

  constructor() {
    this.bestSongs = new Map<number, SongInfo>();

    this.addSong("Losing My Religion", "REM", 1991);
    this.addSong("Creep", "RadioHead", 1993);
    this.addSong("Walk on the Ocean", "Toad the Wet Sprocket", 1991);
  }

  addSong(songName: string, songBand: string, songYear: number) {
    const songInfo = new SongInfo(songName, songBand, songYear);
    this.bestSongs.set(this.key, songInfo);
    this.key++;
  }

  getBestSongs() {
    return this.bestSongs.values();
  }

  createIterator() {
    return this.bestSongs.values();
  }
}