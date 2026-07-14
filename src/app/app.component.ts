import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CourseComponent } from './pages/course/course.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, AboutComponent, ContactComponent, CalculatorComponent, ProfileComponent, CourseComponent, DashboardComponent, RouterLink, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to Masters...';

  myStudentDetails(){
    let studentName = "xyz";
  }

  constructor() {
    let num=11;
  }
}