import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  colaborador: string = 'Nathan Carlos';
  id: number = 7;
  nome: string = 'Nathan Carlos Exercicio';
  salario: number = 4500;
  cargo: string = 'Dev Pl'


  constructor() { }

  ngOnInit(): void {
      
  }

}
