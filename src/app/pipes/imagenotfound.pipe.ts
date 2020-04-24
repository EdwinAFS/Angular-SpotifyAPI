import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageNotFound'
})
export class ImagenotfoundPipe implements PipeTransform {

  transform( value: any ): any {

	if(!value || !value.length){
		return "assets/img/noimage.png";
	}
	
	return value[0].url;

  }

}
