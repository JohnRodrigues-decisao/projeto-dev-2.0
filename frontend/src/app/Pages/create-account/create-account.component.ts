import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsUtil } from '../../Shared/utils/errorsUtil';
import { Router } from '@angular/router';
import { ContaService } from '../../Shared/services/http/conta.service';
import { SenhasUtil } from '../../Shared/utils/senhasUtil';
import { ICriarContaRequest } from '../../Shared/services/models/conta/IcriarContaRequest';
import { ToasterService } from '../../Shared/components/toaster-controller/toaster.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  
  // Pegando os dados do formulário
  public criarContaForm = new FormGroup({
    nome: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    senha: new FormControl<string | null>(null, Validators.required),
    confirmarSenha: new FormControl<string | null>(null, Validators.required),
  });


  public formularioInvalido = false;

  // Erros personalizados
  public errosPersonalizados = ErrorsUtil.getErrors;

  constructor(
    private contaService: ContaService,
    private toasterService: ToasterService,
    private router: Router
  ) {}
  
  public verificaSenha(pSenha: string, pFormControl: FormControl): void {
    if(pSenha != '') {
      if(SenhasUtil.verificarSenhaForte(pSenha)) {
        pFormControl.setErrors({
          senhaForaDoPadrao: true,
        })
      }
    }
  }

  public verificarSenhasIguais(): void {
    if(this.criarContaForm.controls.senha.value !== this.criarContaForm.controls.confirmarSenha.value) {
      this.formularioInvalido = true;
    } else {
      this.formularioInvalido = false;
    }
  }

  public verificarSeFormularioInvalido(): boolean {
    if(this.criarContaForm.invalid || this.formularioInvalido) {
      return true;
    }
    return false;
  }

  public buildCriarContaObjetc(): ICriarContaRequest {
    return {
      nome: this.criarContaForm.controls.nome.value!,
      email: this.criarContaForm.controls.email.value!,
      senha: this.criarContaForm.controls.senha.value!,
    }
  }

  public async criarConta(): Promise<void>{
    try {
      if(!this.verificarSeFormularioInvalido()) {
        const dados = await this.contaService.criarConta(this.buildCriarContaObjetc());
        if(dados.sucesso) {
          localStorage.setItem('Nome-de-usuario', this.criarContaForm.controls.nome.value!);
          this.toasterService.showSuccess('Conta criada com sucesso!');
          this.router.navigate(['/']);
        }
      }
    } catch (error) {
      this.toasterService.showAlert('Error ao criar conta');
      throw error;
    }
  }
}
