import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiziodatiService {

  note = [
    {nome: 'Angelo', appunti: 'ciao mi chiamo angelo'},
    {nome: 'mimmo', appunti: 'ciao mi chiamo mimmo'},
  ]

  constructor() { }

  getNote() {
    return this.note;
  }
}
