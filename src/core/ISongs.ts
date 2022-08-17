import { SongInfo } from "./song-info";

export interface ISongs {
  getBestSongs: () => Iterable<SongInfo>;
}