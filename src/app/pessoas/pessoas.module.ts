import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';

import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {PessoasGridComponent} from './pessoas-grid/pessoas-grid.component';
import {PessoaCadastroComponent} from './pessoa-cadastro/pessoa-cadastro.component';
import {CurrencyMaskModule} from 'ng2-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputMaskModule,
    DropdownModule,

    CurrencyMaskModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoasGridComponent,
    PessoasPesquisaComponent
  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule {
}
