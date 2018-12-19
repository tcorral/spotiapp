import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery (query) {
    return this.http.get('http://localhost:3000/spotify/f7d4864e23544f919f3da422e2a88478/388ea25842324f1ca4e1e2ef81387e46')
    .pipe(
      switchMap((data: any) => {
          const token = data.access_token;
          const url = `https://api.spotify.com/v1/${query}`;
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
  
          return this.http.get(url, { headers });
      })
    );
  }

  getNewReleases() {
    return this
        .getQuery(`browse/new-releases?limit=20`)
        .pipe(  // < added
            map((response: any) => {
                return response.albums.items
            })
        );
}
}
