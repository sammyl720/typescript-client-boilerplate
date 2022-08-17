import { DiscJockey } from "./disc-jockey";
import { SongsOfThe70s } from "./songs-of-70s";
import { SongsOfThe80s } from "./songs-of-80s";
import { SongsOfThe90s } from "./songs-of-90s";

export class RadioStation {
  songs70s = new SongsOfThe70s();
  songs80s = new SongsOfThe80s();
  songs90s = new SongsOfThe90s();

  madMike = new DiscJockey(
    this.songs70s,
    this.songs80s,
    this.songs90s
  );

  constructor() {
    this.madMike.showTheSongs();
  }
}

const radioStation = new RadioStation();