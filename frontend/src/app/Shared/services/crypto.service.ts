import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CryptoServiceService {

  private readonly key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

  constructor() { }

  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data,this.key).toString();
  }

  decodificaToken(token: string): any {
    return jwtDecode(token);
  }
}


