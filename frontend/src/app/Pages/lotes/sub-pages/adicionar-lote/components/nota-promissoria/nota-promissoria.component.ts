import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nota-promissoria',
  templateUrl: './nota-promissoria.component.html',
  styleUrl: './nota-promissoria.component.scss'
})
export class NotaPromissoriaComponent {
  public loteCadastroForm = new FormGroup({
    CMC7Titulo: new FormControl<boolean | null>(null, Validators.required),
    tipoTitulo: new FormControl<boolean | null>(null, Validators.required),
    nomeTitulo: new FormControl<string | null>(null, Validators.required),
    valorTitulo: new FormControl<string | null>(null, Validators.required),
    vencimentoTitulo: new FormControl<string | null>(null, Validators.required),
    cpfCnpjPagador: new FormControl<string | null>(null, Validators.required),
    nomePagador: new FormControl<string | null>(null, Validators.required)
  });
}
