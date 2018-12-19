import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  loading: boolean = false;
  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {}

  search(term) {
    this.loading = true;
    this.spotifyService
      .getArtists(term)
      .subscribe(artists => {
        this.artists = artists;
        this.loading = false;
      });
  }

}
