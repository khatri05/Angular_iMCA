import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  studentDetail:any={
    name:'Krishna Khatri',
    email:'krishna@gmail.com',
    age:21,
    imagePath:'https://www.w3schools.com/w3images/avatar2.png'
  }
}
