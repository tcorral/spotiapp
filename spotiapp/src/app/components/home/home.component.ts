import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  countries: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService
      .getCountriesSpeakingDutch()
      .subscribe((response: any[]) => {
        this.countries = response;
      });
  }

}
