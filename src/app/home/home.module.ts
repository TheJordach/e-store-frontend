import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HeaderComponent} from "./components/header/header.component";
import {CatnavigationComponent} from "./components/catnavigation/catnavigation.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent
  ],
  exports: [
    HeaderComponent,
    CatnavigationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class HomeModule { }
