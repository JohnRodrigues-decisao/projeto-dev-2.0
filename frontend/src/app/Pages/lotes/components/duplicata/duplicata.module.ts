import { EventEmitter, NgModule, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuplicataComponent } from './duplicata.component';
import { ButtonModule, InputModule } from '@decisaosistemas/angular-ds';

@NgModule({
  declarations: [
    DuplicataComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    DuplicataComponent
  ]
})

export class DuplicataModule { 
  // @output() dadosAtualizadosFormulario = new EventEmitter<any>();

  // formularioDuplicata: any = {

  // }

}
