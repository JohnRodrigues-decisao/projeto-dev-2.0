import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-lote',
  templateUrl: './adicionar-lote.component.html',
  styleUrl: './adicionar-lote.component.scss'
})
export class AdicionarLoteComponent {
  public loteCadastroForm = new FormGroup({
    tipoTitulo: new FormControl<boolean | null>(null, Validators.required),
    nomeTitulo: new FormControl<string | null>(null, Validators.required),
    valorTitulo: new FormControl<string | null>(null, Validators.required),
    vencimentoTitulo: new FormControl<string | null>(null, Validators.required),
    cpfCnpjPagador: new FormControl<string | null>(null, Validators.required),
    nomePagador: new FormControl<string | null>(null, Validators.required)
  });

}
