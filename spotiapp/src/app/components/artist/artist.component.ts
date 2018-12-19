import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.loading = true;
    this.activatedRoute
      .params
      .subscribe(params => {
        const id = params.id;
        this.getArtist(id);
        this.getTopTracks(id);
      });
  }

  getArtist(id) {
    this.loading = true;
    return this.spotifyService
      .getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      });
  }

  getTopTracks(id) {
    this.loading = true;
    return this.spotifyService
      .getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
        this.loading = false;
      });
  }
}