import { SongInfo } from "./song-info";

export interface SongIterator {
  createIterator: () => Iterable<SongInfo>;
}