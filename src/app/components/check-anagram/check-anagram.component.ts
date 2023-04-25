import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { AnagramService } from 'src/app/services/anagram.service';

@Component({
  selector: 'app-check-anagram',
  templateUrl: './check-anagram.component.html',
  styleUrls: ['./check-anagram.component.css']
})

export class CheckAnagramComponent implements OnInit {
  public word1  = '';
  public word2 = ''; 
  result: boolean | null = null;

  constructor(private anagramService: AnagramService) { }

  ngOnInit(): void {
  }
  checkAnagram() { 
    
    this.result = this.anagramService.areAnagrams(this.word1, this.word2);
    setTimeout(()=>{
      this.result = null;
    }, 3000)
  } 

}



