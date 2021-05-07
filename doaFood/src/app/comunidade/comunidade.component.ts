import { Component, OnInit } from '@angular/core';
import { Comunidade } from '../model/Comunidade';

@Component({
  selector: 'app-comunidade',
  templateUrl: './Comunidade.component.html',
  styleUrls: ['./comunidade.component.css']
})
export class ComunidadeComponent implements OnInit {
    comunidade : Comunidade = new Comunidade()
    listaComunidades: Comunidade[]
  
  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
