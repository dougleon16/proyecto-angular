import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAnagramComponent } from './components/check-anagram/check-anagram.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NumberCheckerComponent } from './components/number-checker/number-checker.component';
import { FizzbuzzComponent } from './components/fizzbuzz/fizzbuzz.component';

const routes: Routes = [
  {path: '', redirectTo: "/inicio", pathMatch: 'full' },
  {path: "inicio", component: InicioComponent},
  {path: "anagram", component: CheckAnagramComponent},
  {path: "fibonacci", component: NumberCheckerComponent},
  {path: 'fizbuzz', component: FizzbuzzComponent}
 

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
