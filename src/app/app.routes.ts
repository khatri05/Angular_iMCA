import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'course',component:AboutComponent},
    {path:'calculator',component:CalculatorComponent}
];
