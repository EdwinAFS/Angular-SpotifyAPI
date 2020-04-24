import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

	newAlbums: any[] = [];
	loading: boolean; 

	constructor( private spotifySvc : SpotifyService) {	

		this.loading = true;

		this.spotifySvc.getNewReleases().subscribe( (data: any) => {
			this.newAlbums = data;
			this.loading = false;
		});
	}

}

