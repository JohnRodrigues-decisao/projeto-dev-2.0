import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-lotes',
  templateUrl: './listar-lotes.component.html',
  styleUrl: './listar-lotes.component.scss'
})

export class ListarLotesComponent {
  public listaLotes = [
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
  ]
}
