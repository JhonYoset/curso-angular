import { ArtistModel } from "./artist.model";

export interface TrackModel{
    name : string;
    album : string;
    cover : string;
    url : string;
    _id : string | number;
    artist : ArtistModel;
}

export interface DataTrackModel{
    data : Array<TrackModel>
}