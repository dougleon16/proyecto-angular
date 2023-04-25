import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-number-checker',
  templateUrl: './number-checker.component.html',
  styleUrls: ['./number-checker.component.css']
})
export class NumberCheckerComponent implements OnInit {
  number: number | null = null; 
  result: { isEven: boolean; isFibonacci: boolean } | null = null;
  
  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
  }
  checkNumber() {
     if (this.number !== null) {
       this.result = { isEven: this.numberService.isEven(this.number), 
        isFibonacci: this.numberService.isFibonacci(this.number), 
        
      }; 
      setTimeout(()=>{
        this.result = null;
      }, 3000)

    }
  } 
}









