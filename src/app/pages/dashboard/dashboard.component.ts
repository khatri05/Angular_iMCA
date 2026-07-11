import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalStudent: string[] = ['Krishna','Rudra','Bhavya','Jash','Krisha','Dhanvi','Thomas','Charlie','Tom','Michael','Jack','Nathan','Danny']
  studentLength = this.totalStudent.length

  totalCourse: string[] = ['B.Com','M.Com','BCA','MCA','BBA','MCA','BscIT','MscIT','iMCA','iMscIT','iMBA']
  courseLength = this.totalCourse.length
}
