import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tipoDoTitulo } from '../../../Shared/models/tipoDoTitulo.enum';
// import { NTitulos } from '../../../Shared/models/titulosNamespace';
import { TituloService } from '../../../Shared/services/http/titulo.service';
import { CheckboxChangeEvent } from '@decisaosistemas/angular-ds';

@Component({
  selector: 'app-adicionar-lote',
  templateUrl: './adicionar-lote.component.html',
  styleUrl: './adicionar-lote.component.scss'
})
export class AdicionarLoteComponent implements OnInit {
  public tipoDoTitulo!: tipoDoTitulo | null;

  public listaBoxTitulos = [
    // { qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789 },
    // { qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789 },
  ]

  public listaLotes = [
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
  ]

  changeEvento($event: CheckboxChangeEvent) {
    throw new Error('Method not implemented.');
  }

  constructor(private tituloService: TituloService) { }

  public async ngOnInit(): Promise<void> {
    // this.listarTitulo = await this.listaBoxTitulos();
  }

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

  loteCadastroFormSubmit() { }

  // public async listaBoxTitulos(): Promise<NTitulos.IListarTituloInterface[]> {
  //   const titulosDB = (await this.tituloService.listarTitulo()).dados as NTitulos.IListarTituloInterface[];
  //   return titulosDB;
  // }

  public async salvarLote(): Promise<void> {
    console.log(this.formularioCadastroLote)
  }
}
