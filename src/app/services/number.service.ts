import { Injectable } from "@angular/core";

@Injectable
({ providedIn: 'root' }) export class NumberService {

  isEven(num: number): boolean { return num % 2 === 0; }
  
  isFibonacci(num: number): boolean { let prev = 0; let curr = 1;
  
  while (curr < num) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr === num;
  } }