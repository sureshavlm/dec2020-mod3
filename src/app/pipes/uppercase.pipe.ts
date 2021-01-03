import { Pipe } from '@angular/core';

@Pipe({
	name: 'myuppercase'
})

export class MyUpperCasePipe {
	
	transform(value: any) {
		let _value: String;

		if(typeof(value) === 'string'){
			_value = value.toUpperCase();
		}
		else {
			_value = 'Unable to parse';
		}
		return _value;
	}

}