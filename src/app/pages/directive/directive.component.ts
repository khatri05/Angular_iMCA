import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isUserLoggedIn = false;

  toggleState(){
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  studentList=[
    'Mohit',
    'Aman',
    'Rohit'
  ]
}
