export class SongInfo {
  constructor(
    private _songName: string,
    private _bandName: string,
    private _yearRelease: number
  ) { }

  get songName() {
    return this._songName;
  }

  get bandName() {
    return this._bandName;
  }

  get yearReleased() {
    return this._yearRelease;
  }
}