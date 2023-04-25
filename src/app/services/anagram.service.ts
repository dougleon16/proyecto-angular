import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) export class AnagramService {

constructor() { }

areAnagrams(word1: string, word2: string): boolean { 
// Eliminamos espacios en blanco y convertimos a minúsculas 
  word1 = word1.trim().toLowerCase(); 
  word2 = word2.trim().toLowerCase();

// Comprobamos que las palabras sean diferentes y tengan la misma longitud
if (word1 === word2 || word1.length !== word2.length) {
  return false;
}

// Convertimos las palabras a arrays de caracteres y los ordenamos alfabéticamente
const sortedWord1 = word1.split('').sort().join('');
const sortedWord2 = word2.split('').sort().join('');

// Comprobamos si los arrays ordenados son iguales
return sortedWord1 === sortedWord2;
}

}