import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCadastroComponent } from './components/lista-cadastro/lista-cadastro.component';



@NgModule({
  declarations: [
    ListaCadastroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaCadastroComponent
  ],
})
export class ColaboradoresModule { }
