import {Component, OnInit} from '@angular/core';
import {LancamentoService} from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];

  constructor(private lancamentoService: LancamentoService) {
  }

  pesquisar() {
    this.lancamentoService.pesquisar()
      .then(lancamentos => this.lancamentos = lancamentos);
  }

  ngOnInit(): void {
    this.pesquisar();
  }

}
