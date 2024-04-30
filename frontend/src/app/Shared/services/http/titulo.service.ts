import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '../models/IHttpResponse';
import { apiUrl } from '../../constants/environment';
import { ITitulosRequest } from '../models/titulo/ITitulosRequest';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  constructor(private http: HttpClient) { }

  // Listar titulo
  public async listarTitulo(): Promise<IHttpResponse> {
    const retornaHttp = this.http.get<IHttpResponse>(`${apiUrl}/titulo`).pipe();
    const dados = await lastValueFrom(retornaHttp);
    console.log(dados);
    return dados;
  }

  // Adiconar titulo
  public async adicionarTitulo(pBody: ITitulosRequest): Promise<IHttpResponse> {
    const retornaHttp = this.http.post<IHttpResponse>(`${apiUrl}/titulo`, pBody).pipe();
    const dados = await lastValueFrom(retornaHttp);
    console.log(dados)
    return dados;
  }

}
