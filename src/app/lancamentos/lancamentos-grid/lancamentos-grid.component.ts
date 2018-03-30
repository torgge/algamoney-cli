import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-lancamento-grid',
  template: `
    <div class="ui-g">
      <div class="ui-g-12">
        <p-dataTable [value]="lancamentos"
                     [paginator]="true" [rows]="3"
                     [responsive]="true">
          <p-column field="tipo" header="Tipo"></p-column>
          <p-column field="descricao" header="Descrição"></p-column>
          <p-column field="dataVencimento" header="Data Vencimento" styleClass="col-data">
            <ng-template let-lanc="rowData" pTemplate="body">
              <span>{{lanc.dataVencimento | date:'dd/MM/yyyy'}}</span>
            </ng-template>
          </p-column>
          <p-column field="dataPagamento" header="Data Pagamento" styleClass="col-data">
            <ng-template let-lanc="rowData" pTemplate="body">
              <span>{{lanc.dataPagamento | date:'dd/MM/yyyy'}}</span>
            </ng-template>
          </p-column>
          <p-column field="valor" header="Valor" styleClass="col-valor">
            <ng-template let-lanc="rowData" pTemplate="body">
              <span [style.color]="lanc.tipo === 'DESPESA' ? 'red' : 'blue'">{{lanc.valor | currency:'BRL':true}}</span>
            </ng-template>
          </p-column>
          <p-column field="pessoa" header="Pessoa"></p-column>
          <p-column styleClass="col-acoes">
            <ng-template pTemplate="body">
              <button pButton icon="fa-pencil" pTooltip="Alterar" tooltipPosition="top"></button>
              <button pButton icon="fa-trash" pTooltip="Excluir" tooltipPosition="left"></button>
            </ng-template>
          </p-column>
        </p-dataTable>
      </div>
    </div>
  `,
  styles: []
})
export class LancamentosGridComponent {

  @Input() lancamentos = [];

}
