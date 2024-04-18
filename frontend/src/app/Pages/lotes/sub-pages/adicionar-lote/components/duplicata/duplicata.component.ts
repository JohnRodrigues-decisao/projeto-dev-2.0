import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-duplicata',
  templateUrl: './duplicata.component.html',
  styleUrl: './duplicata.component.scss'
})
export class DuplicataComponent {
  public loteCadastroForm = new FormGroup({
    tipoTitulo: new FormControl<boolean | null>(null, Validators.required),
    nomeTitulo: new FormControl<string | null>(null, Validators.required),
    valorTitulo: new FormControl<string | null>(null, Validators.required),
    vencimentoTitulo: new FormControl<string | null>(null, Validators.required),
    cpfCnpjPagador: new FormControl<string | null>(null, Validators.required),
    nomePagador: new FormControl<string | null>(null, Validators.required)
  });
}
