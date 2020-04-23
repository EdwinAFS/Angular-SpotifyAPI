import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

	newAlbums: any[] = [];

	constructor( private spotifySvc : SpotifyService) {	
		this.spotifySvc.getNewReleases().subscribe( (response: any) => {
			this.newAlbums = response.albums.items;
		});
	}


}

