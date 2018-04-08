import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold; 
    }`
  ]
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.trainig';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver: boolean = false; 

  getValor() {
    return 1;;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
    console.log(this.valorAtual);
  }

  salvarValor(valorSalvo : string) {
    this.valorSalvo = valorSalvo;
  }
  
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
