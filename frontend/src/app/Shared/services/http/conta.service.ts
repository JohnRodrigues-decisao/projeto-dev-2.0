import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICriarContaRequest } from '../models/conta/IcriarContaRequest';
import { IHttpResponse } from '../models/IHttpResponse';
import { apiUrl } from '../../constants/environment';
import { lastValueFrom } from 'rxjs';
import { IloginRequest } from '../models/conta/IloginRequest';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  public async criarConta(pbody: ICriarContaRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/conta`, pbody).pipe();
    const dados = await lastValueFrom(retornoHttp)
    console.log(dados)
    return dados;
  }

  public async login(pBody: IloginRequest): Promise<IHttpResponse> {
    const retornoHttp = this.http.post<IHttpResponse>(`${apiUrl}/login`, pBody).pipe();
    const dados = await lastValueFrom(retornoHttp);
    return dados;
  }
}
