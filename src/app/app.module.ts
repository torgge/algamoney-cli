import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PessoasModule} from './pessoas/pessoas.module';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {CoreModule} from './core/core.module';
import {HttpModule} from '@angular/http';
import {LancamentoService} from './lancamentos/lancamento.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    LancamentosModule,
    PessoasModule,
    CoreModule
  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
