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

  decrypt(encryptedData: string): string {
    if(!encryptedData){
      throw new Error('Nenhum dado criptografado fornecido.');
    }

    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.key);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    } catch(error){
      console.error('Erro ao descriptografar os dados:', error);
      throw new Error('Erro ao descriptografar os dados.');
    }

  }
  
}
