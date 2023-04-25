import { TestBed } from '@angular/core/testing'; import { AnagramService } from './anagram.service'

describe('AnagramService', () => { let service: AnagramService;

beforeEach(() => { TestBed.configureTestingModule({}); service = TestBed.inject(AnagramService);
 });

it('should be created', () => { expect(service).toBeTruthy(); 
});

it('should return true for "listen" and "silent"', () => 
{ const result = service.areAnagrams('listen', 'silent'); 
expect(result).toBeTrue();
 });

it('should return false for "hello" and "world"', () => {
   const result = service.areAnagrams('hello', 'world'); expect(result).toBeFalse();
});

it('should return false for "listen" and "listened"', () => { 
  const result = service.areAnagrams('listen', 'listened'); 
  expect(result).toBeFalse(); 
});

it('should ignore case and leading/trailing whitespace', ()=> { 
  const result = service.areAnagrams(' LISTEN', 'SILENT '); 
  expect(result).toBeTrue(); 
 }); 

 it('should instructor tests', ()=> { 
  const result = service.areAnagrams('LISTEN', 'SILENT '); 
  expect(result).toBeTrue(); 
 }); 
 
 it('should instructor tests 2', ()=> { 
   const result = service.areAnagrams('this Code should compile  ', 'siht  edcO Should COMPILE '); 
   expect(result).toBeFalse(); 
  }); 
});