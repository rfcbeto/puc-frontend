import { Injectable } from '@angular/core';

import { Pessoa } from '../cadastro-pessoa/pessoa-form/pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private pessoa!: Pessoa;
  private readonly API = 'http://localhost:8081/api/v1/pessoas/listartodos'

  constructor(private httpClient: HttpClient) {

   }

  findAll(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.API);

  }

  setPessoa(pessoa: Pessoa) {
    this.pessoa = pessoa;
  }

  getPessoa(): Pessoa {
    return this.pessoa;
  }
}
