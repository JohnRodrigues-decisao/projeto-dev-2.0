import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from '../../services/http/conta.service';
import { CryptoServiceService } from '../../services/crypto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  
  public nomeUsuario: string = '';

  constructor(
    private router: Router,
    private cryptoService: CryptoServiceService, 

  ) {}

  ngOnInit(): void {
    this.GetNameUser();
  }

  public async GetNameUser(){
    const dados = localStorage.getItem('token')
    // console.log(dados);

    const tokenInfo = await this.cryptoService.decodificaToken(dados || '');
    this.nomeUsuario = tokenInfo.nome.split(' ').slice(0, 2).join(' ');;
  }
 
  public sairDoSistema(){
    localStorage.removeItem('emailAutenticado');
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }

} 
 