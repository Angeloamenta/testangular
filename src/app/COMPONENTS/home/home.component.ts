import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServiziodatiService } from 'src/app/servizi/serviziodati.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private servizioDati: ServiziodatiService) {

  }

note:any;

ngOnInit() {
  
  this.note = this.servizioDati.getNote();
}

  ngAfterViewInit() {
    console.log(this.servizioDati.note)
    

  }
}
