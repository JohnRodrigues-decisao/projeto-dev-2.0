import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { tipoDoTitulo } from '../../../Shared/models/tipoDoTitulo.enum';

@Component({
  selector: 'app-adicionar-lote',
  templateUrl: './adicionar-lote.component.html',
  styleUrl: './adicionar-lote.component.scss'
})
export class AdicionarLoteComponent {
  public tipoDoTitulo!: tipoDoTitulo | null; 

  public formularioCadastroLote = new FormGroup({
    tipoTitulo: new FormControl<boolean | null>(null, Validators.required),
    nomeTitulo: new FormControl<string | null>(null, Validators.required),
    valorTitulo: new FormControl<string | null>(null, Validators.required),
    vencimentoTitulo: new FormControl<string | null>(null, Validators.required),
    cpfCnpjPagador: new FormControl<string | null>(null, Validators.required),
    nomePagador: new FormControl<string | null>(null, Validators.required)
  });


  public selecaoDeTipoDeTitulo(pTipoDoTitulo: any): void {
    this.formularioCadastroLote.get('tipoTitulo')?.setValue(pTipoDoTitulo);
  }

  public botaoSalvarClienteDesabilitado(): boolean {
    return true;
  }

  public listaBoxTitulos() {}

  loteCadastroFormSubmit(){
    
  } 

  public async salvarLote(): Promise<void>{
    console.log(this.formularioCadastroLote)
  }

}
