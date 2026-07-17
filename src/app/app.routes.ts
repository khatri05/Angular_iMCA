import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CourseComponent } from './pages/course/course.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DirectiveComponent } from './pages/directive/directive.component';
export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'course',component:AboutComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'profile',component:ProfileComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'enum',component:CourseComponent},
    {path:'contact',component:ContactComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'directive',component:DirectiveComponent}
];
