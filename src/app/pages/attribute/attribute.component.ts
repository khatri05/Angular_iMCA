import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  isdivHide=false
  isVisible=true
  isDivVisible=true
  firstNumber=0 
  secondNumber=0
 
  showDiv(){
    this.isVisible = true
  }

  hideDiv(){
    this.isVisible = false
  }

  toggleDiv(){
    this.isdivHide = !this.isdivHide
  }
}
