import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  pessoaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.pessoaForm = this.formBuilder.group({
      nome: [],
      sexo: [],
      telefone: [],
      tipo: [],
      status: [],
      dataNascimento: [],
      rua: [],
      cep: [],
      numero: [],
      bairro: [],
      cidade: [],
      estado: [],
      pais: [],
      complemento: []
      //endereco: this.formBuilder.array([this.createFormGroup()])
    });
   }

  ngOnInit(): void {
  }

  createFormGroup(){
    return this.formBuilder.group({
      rua: [],
      cep: [],
      numero: [],
      bairro: [],
      cidade: [],
      estado: [],
      pais: [],
      complemento: []
    })
  }


}
