import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyReleasesURL = "https://api.spotify.com/v1/browse/new-releases?limit=20";

  constructor( private http: HttpClient) { }

  getNewReleases(){
	const headers = new HttpHeaders({
		Authorization: 'Bearer BQB0jIfr7H9APkXLY4ZdkVBDiRaCMRUGQaGRl50qB8sfq3Ua_bizZ9l8KpnVHWRk5WsUGUPLaZ5fpFakHTI'
	});

	return this.http.get( this.spotifyReleasesURL, { headers });
  }

}
