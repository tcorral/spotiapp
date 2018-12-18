import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getNewReleases() {
    const url = `https://api.spotify.com/v1/browse/new-releases`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer BQCniNZVbXT6Uhtoqp0m1SkXoBheWiWAAgpx1m-ie1broddp4suraa-zUYHjVNs-jIop9QMELU1UsMLUFieTBsfUhnp0SxJFelfPCxzoR8LRb02q8nEFuLS3dEzPxc0Lx9KGRNRuC0PZbZbGkpwceLrVIdNI2qoejUmJHO4L7MrkSiY2BtW2LCgnYQdJa6g3wUgw-mcngpzzW_kz_yRITHdA7arDLYpYlCj1Y8nxdt7XOhutVmjZhQic55wlESHCEHBSAIM78KOP`
    });

    return this.http.get(url, { headers });
  }
}
