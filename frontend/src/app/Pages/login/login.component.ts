import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContaService } from '../../Shared/services/http/conta.service';
import { Router } from '@angular/router';
import { IloginRequest } from '../../Shared/services/models/conta/IloginRequest';
import { CryptoServiceService } from '../../Shared/services/crypto.service';
import { ToasterService } from '../../Shared/components/toaster-controller/toaster.service';
import { ErrorsUtil } from '../../Shared/utils/errorsUtil';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    senha: new FormControl<string | null>(null, Validators.required),
    lembrarMeCheckbox: new FormControl<boolean | null>(false)
  });

  // Erros personalizados
  public errosPersonalizados = ErrorsUtil.getErrors;

  constructor(
    private contaService: ContaService,
    private toasterService: ToasterService,
    private router: Router,
    private cryptoService: CryptoServiceService, 
  ) {}

  private buildLoginObject(): IloginRequest{
    return {
      email: this.loginForm.controls.email.value!,
      senha: this.loginForm.controls.senha.value!,   
    }
  }

  public async login(): Promise<void> {
    try {
      if(this.loginForm.valid){
        const dados = await this.contaService.login(this.buildLoginObject());
        
        if(dados.sucesso){
          const emailCriptografado = this.cryptoService.encrypt(this.loginForm.controls.email.value!);          
          localStorage.setItem('emailAutenticado', emailCriptografado);
          this.router.navigate(['/dashboard'])
        }

        localStorage.setItem('token', dados.dados.token);
      }
    } catch (error) {
      this.toasterService.showAlert('E-mail ou senha inválido');
      throw error;
    }
  }
} 