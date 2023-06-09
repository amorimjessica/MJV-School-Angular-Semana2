import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColaboradoresModule } from './features/colaboradores/colaboradores.module';
import { ListagemComponent } from './features/colaboradores/listagem/listagem.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ColaboradoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
