import { Injectable } from '@angular/core';
import { CryptoServiceService } from '../crypto.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cryptoService: CryptoServiceService) {}

  public buscarNomeUsuario(): any {
    const tokenEncrypt = localStorage.getItem('token');
    if (tokenEncrypt) {
      const descryptToken = this.cryptoService.decrypt(tokenEncrypt);
      if(descryptToken){
        return JSON.parse(descryptToken);
      }
    }
    return null;
  }
}
