import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoasService } from '../../services/pessoas.service';
import { Pessoa } from './pessoa';


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  pessoaForm: FormGroup;
  pessoa: Pessoa;
  newPessoa!: Pessoa;

  constructor(private formBuilder: FormBuilder, private pessoasService: PessoasService) {
    this.pessoa = this.pessoasService.getPessoa();
    this.pessoaForm = this.formBuilder.group({
      id: this.pessoa.id,
      nome: this.pessoa.nome,
      cpf: this.pessoa.cpf,
      sexo: this.pessoa.sexo,
      telefone: this.pessoa.telefone,
      tipo: this.pessoa.tipo,
      status: this.pessoa.status,
      dataNascimento: this.pessoa.dataNascimento,
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
    this.pessoasService.setPessoa(this.newPessoa);
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
