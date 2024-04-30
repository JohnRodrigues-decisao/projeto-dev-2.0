import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from '../toaster-controller/toaster.service';
import { modalConfigDefault } from '../../constants/modalConfigConstants';
import { ModalDefaultComponent } from '../../modals/modal-default/modal-default.component';
import { CryptoServiceService } from '../../services/crypto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  
  public nomeUsuario: string = '';

  constructor(
    private ngbModal: NgbModal, 
    private router: Router,
    private toasterService: ToasterService,
    private cryptService: CryptoServiceService
  ) {}
 
  public sairDoSistema(){
    localStorage.removeItem('emailAutenticado');
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }

} 
 