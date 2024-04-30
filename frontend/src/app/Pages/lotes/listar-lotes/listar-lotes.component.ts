import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-listar-lotes',
  templateUrl: './listar-lotes.component.html',
  styleUrl: './listar-lotes.component.scss'
})

export class ListarLotesComponent implements OnInit {
  public listaBoxLotes = [
    { qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789 },
    { qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789 },
    { qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789 },
    { qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789 },
  ]

  private urlAtual: string = '';

  constructor(
    private location: Location,
  ) { }

  @Output() breadcrumbFilho = this.urlAtual;

  ngOnInit(): void { }

  breadcrumbFilhoUrl() {
    this.urlAtual = this.location.prepareExternalUrl(this.location.path());
  }

}
