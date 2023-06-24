import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { AboutComponent } from './COMPONENTS/about/about.component';
import { ContattiComponent } from './COMPONENTS/contatti/contatti.component';
import { InputComponent } from './COMPONENTS/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContattiComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
