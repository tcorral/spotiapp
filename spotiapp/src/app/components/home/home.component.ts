import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService
    .getNewReleases()
    .subscribe((newReleases: any[]) => {
      console.log('new releases:', newReleases);
      this.newReleases = newReleases;
    })
  }

}
