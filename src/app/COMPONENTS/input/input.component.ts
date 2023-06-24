import { Component, OnInit } from '@angular/core';
import { ServiziodatiService } from 'src/app/servizi/serviziodati.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private servizioDati: ServiziodatiService) {

  }

name= "";
nota="";

  sendNote() {
    console.log("nome",this.name)
    console.log("nota",this.nota)
    let obj = {nome: this.name, appunti: this.nota}
    this.servizioDati.note.push(obj)
    this.name = "";
    this.nota= "";
  }

  ngOnInit() {
    console.log("sono input",this.servizioDati.note)
  }
}
