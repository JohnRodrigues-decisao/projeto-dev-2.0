import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoServiceService {

  private readonly key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

  constructor() { }

  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data,this.key).toString();
  }

  decrypt(encryptedData: string): any {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.key);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('Erro ao descriptografar os dados:', error);
      return error;
    }
  }

  // decrypt(token: string): any {
  //   try {
  //     return jwt_decode(token);
  //   } catch(Error) {
  //     return null;
  //   }
  // }
}

function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}

