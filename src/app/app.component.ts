import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'module-three';
  myColor : String = 'yellow';
  isMobile : boolean;
  students: any[];

  constructor() {
  	this.students = [
  		{name: 'Robert', age: 19, course: 'Computers', fee: 50000, date: new Date(), phone: 1234567890, rank: 2},
  		{name: 'Peeter', age: 17, course: 'Management', fee: 75000, date: new Date(), phone: 234567891, rank: 1}
  		]
  }

  toggle() {
  	this.isMobile = !this.isMobile;
  }
}
