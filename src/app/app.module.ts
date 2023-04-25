import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { CheckAnagramComponent } from './components/check-anagram/check-anagram.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { NumberCheckerComponent } from './components/number-checker/number-checker.component';
import { FizzbuzzComponent } from './components/fizzbuzz/fizzbuzz.component';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CheckAnagramComponent,
    InicioComponent,
    NumberCheckerComponent,
    FizzbuzzComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
