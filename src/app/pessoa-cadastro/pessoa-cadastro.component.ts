import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {


  ccRegex: RegExp = /[0-9]{5}-[0-9]{3}$/;

  constructor() { }

  ngOnInit() {
  }

}
