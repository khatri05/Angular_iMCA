import { DatePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [FormsModule,NgClass,DatePipe],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isUserLoggedIn = false
  today = new Date();
  classSuccessValue=''
  classPrimaryValue=''
  classSecondaryValue=''
  classWarningValue=''

  toggleState(){
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  studentList=[
    'Mohit',
    'Aman',
    'Rohit'
  ]

  ChangeToSuccess(){
    this.classSuccessValue='alert alert-success'
  }

  ChangeToPrimary(){
    this.classPrimaryValue='alert alert-primary'
  }

  ChangeToSecondary(){
    this.classSecondaryValue='alert alert-secondary'
  }

  ChangeToWarning(){
    this.classWarningValue='alert alert-warning'
  }
}
