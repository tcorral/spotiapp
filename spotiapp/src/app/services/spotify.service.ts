import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getCountriesSpeakingDutch() {
    return this.http
    .get(`https://restcountries.eu/rest/v2/lang/nl`)
  }
}
