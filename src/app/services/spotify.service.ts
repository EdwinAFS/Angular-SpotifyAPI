import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }
  
  getQuery( query: String ): Observable<any>{
	const spotifyURI = `https://api.spotify.com/v1/${query}`;
	
	const headers = new HttpHeaders({
		Authorization: 'Bearer BQA3a1w15g4Gnf3UQuTz4zkfGLp1qQrpQy3gOF2j4K-k_mmJxTEJdupZbGRT84sYDIWXqE_XZjqTPwlsavo'
	});

	return this.http.get( spotifyURI, { headers }); 
  }

  getNewReleases(){
	
	return this.getQuery("browse/new-releases?limit=20").pipe( map( response => {
		return response['albums'].items;
	}));

  }

  getSongsByArtist( filter: string ){

	return this.getQuery( `search?q=${filter}&type=artist&limit=20`).pipe( map( response => {
		return response['artists'].items;
	}));
  }

}
