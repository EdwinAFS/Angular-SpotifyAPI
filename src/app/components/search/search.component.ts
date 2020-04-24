import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

	artistList: any[] = [];
	loading: boolean;

	constructor( private spotifySvc : SpotifyService) {
		this.loading = false;
	}

	ngOnInit() { }

	buscar( filterArtist: string ){

		if( filterArtist == "" ) return;

		this.loading = true;

		this.spotifySvc.getSongsByArtist( filterArtist ).subscribe( (data: any) => {
			this.artistList = data;
			this.loading = false;
		});

	}

}
