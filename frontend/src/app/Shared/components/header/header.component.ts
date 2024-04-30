import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  
  public nomeUsuario: string = '';

  constructor(
    private router: Router,
  ) {}
 
  public sairDoSistema(){
    localStorage.removeItem('emailAutenticado');
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }

} 
 