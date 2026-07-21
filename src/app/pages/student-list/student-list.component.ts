import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  showList=true

  Students = [
    'Krishna',
    'Bhavya',
    'Siddharth',
    'Neel',
    'Harsh',
    'Karan',
    'Jash',
    'Rudra',
    'Swar',
    'Pradeep'
  ]
}
