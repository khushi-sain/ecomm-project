import { Component  } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { RouterLink, RouterLinkActive } from '@angular/router';

import { NgFor, NgClass, NgStyle, NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, NgFor, NgClass, NgStyle, NgIf ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
  
})
export class CalculatorComponent {

  num1: number = 0;
  num2: number = 0; 
  operation: string = ''; 
  result: number | null = null; 
  isOperationSelected: boolean = false; 

  
  onOperationChange(): void {
    this.isOperationSelected = this.operation !== ''; 
  }

  calculate(): void {
    switch (this.operation) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        if (this.num2 !== 0) {
          this.result = this.num1 / this.num2;
        } else {
          this.result = null; 
          alert('Cannot divide by zero');
        }
        break;
      default:
        this.result = null;
    }
  }
}




