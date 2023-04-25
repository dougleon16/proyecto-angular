import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from 'src/app/services/fizz-buzz.service';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  number = 0;
  result = '';
  constructor(private fizzBuzzService: FizzBuzzService) { }

  ngOnInit(): void {
  }
  checkFizzBuzz() { 
    this.result = this.fizzBuzzService.fizzBuzz(this.number)
    setTimeout(()=>{
      this.result = '';
    }, 3000)
   }
    
}


