import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

enum Course{
  BCA, 
  MCA, 
  iMCA, 
  BCA_Hons
}

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})

export class CourseComponent {
  courses=[Course[Course.BCA],Course[Course.MCA],Course[Course.iMCA],Course[Course.BCA_Hons]]
  selectedCourse:string = ""
}
