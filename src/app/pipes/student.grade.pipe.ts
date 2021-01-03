import { Pipe } from '@angular/core';

@Pipe({
	name: 'studentrank'
})

export class StudentGradePipe {

	transform(students: any) {
		let temp: any[] = [];

		for(let i = 0; i < students.length; i++ ){
			if(students[i].rank < 2){
				temp.push(students[i]);
			}
		}

		return temp;
	}
}
