import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  courseTitle = '';
  courseDuration = '4 months';
  courseFees = 50000;
  courseFaculty = 'Prof.Nilesh Taware';
  isCourseAvailable = true;
  imagePath = 'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1.png';

  courseEnrollment() {
    console.log('Course Enrollment Form is displayed');
  }
}
