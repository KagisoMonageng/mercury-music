import { Album } from "./album"
import { Artist } from "./artist"

export interface Song{
    id: number,
    uri: string,
    name: string
    images: any []
    duration_ms: number
    explicit: boolean
    preview_url: string
    artists : Artist[],
    album: Album
}