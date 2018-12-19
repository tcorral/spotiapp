import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.loading = true;
    this.spotifyService
    .getNewReleases()
    .subscribe((newReleases: any[]) => {
      this.newReleases = newReleases;
      this.loading = false;
    })
  }
}
