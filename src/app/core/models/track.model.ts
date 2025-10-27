import { ArtistModel } from "./artists.model";

export interface TrackModel{
  name: string;
  album: string;
  cover: string;
  _id: string|number;
  artist: ArtistModel;
}
