// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { ICreateAccountRequest } from '../models/account/ICreateAccountRequest';
// import { IHttpResponse } from '../models/IHttpResponse';
// import { lastValueFrom } from 'rxjs';
// import { apiUrl } from '../../constants/environment';
// import { ILoginRequest } from '../models/account/ILoginRequest';
// import { IGetDataLoggedAccountRequest } from '../models/account/IGetDataLoggedAccountRequest';

// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {

//   constructor(private http: HttpClient) { }

//   public async createAccount(pBody: ICreateAccountRequest): Promise<IHttpResponse> {
//     const returnHttp = this.http.post<IHttpResponse>(`${apiUrl}/create-account`, pBody).pipe();
//     const data = await lastValueFrom(returnHttp);
//     return data;
//   }

//   public async login(pBody: ILoginRequest): Promise<IHttpResponse> {
//     const returnHttp = this.http.post<IHttpResponse>(`${apiUrl}/login`, pBody).pipe();
//     const data = await lastValueFrom(returnHttp);
//     return data;
//   }

//   public async getDataloggedAccount(pBody: IGetDataLoggedAccountRequest): Promise<IHttpResponse> {
//     const returnHttp = this.http.post<IHttpResponse>(`${apiUrl}/list-account`, pBody).pipe();
//     const data = await lastValueFrom(returnHttp);
//     return data;
//   }

//   public async editAccount(pBody: ICreateAccountRequest): Promise<IHttpResponse> {
//     const returnHttp = this.http.put<IHttpResponse>(`${apiUrl}/edit-account`, pBody).pipe();
//     const data = await lastValueFrom(returnHttp);
//     return data;
//   }
// }
