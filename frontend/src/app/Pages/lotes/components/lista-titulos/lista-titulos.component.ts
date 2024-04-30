import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-titulos',
  templateUrl: './lista-titulos.component.html',
  styleUrl: './lista-titulos.component.scss'
})
export class ListaTitulosComponent {
  public listaLotes = [
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
    {qtnTitulos: 23, status: 'não enviado', dataLote: '04/03/2024', dataEnvio: '11/04/2024', valorTotalLote: 123456789},
  ]
}
