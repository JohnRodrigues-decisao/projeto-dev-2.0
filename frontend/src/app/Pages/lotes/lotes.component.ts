import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';


@Component({
  selector: 'app-lotes',
  templateUrl: './lotes.component.html',
  styleUrl: './lotes.component.scss'
})
export class LotesComponent implements OnInit{

  // private urlAtual: string = '';

  breadcrumb: string = ''

  constructor(
    private location: Location
  ) {}
 
  ngOnInit(): void { 
    // this.breadcrumb();
  }

  // breadcrumb(){
  //   this.urlAtual = this.location.prepareExternalUrl(this.location.path());

  //   if(this.urlAtual === '/enviar-titulo/adicionar-titulo'){
  //     console.log('Deu certooooooo!')
  //   }
  // }

  recebeBreadcrumb(breadcrumbFilho: any) {
    this.breadcrumb = breadcrumbFilho;
  }

}
