import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  firstNumber = '';
  secondNumber = '';
  calculationResult=0;

  calAdd(){
    this.calculationResult=Number(this.firstNumber)+Number(this.secondNumber);
  }
  calSubtract(){
    this.calculationResult=Number(this.firstNumber)-Number(this.secondNumber);
  }
  calMultiply(){
    this.calculationResult=Number(this.firstNumber)*Number(this.secondNumber);
  }
  calDivide(){
    if(Number(this.secondNumber) == 0){
      alert("Division by zero is not allowed.");
      this.secondNumber='';
    }else{
      this.calculationResult=Number(this.firstNumber)/Number(this.secondNumber);
    }
  }

  clearFields(){
    this.firstNumber='';
    this.secondNumber='';
    this.calculationResult=0;
  }
}
