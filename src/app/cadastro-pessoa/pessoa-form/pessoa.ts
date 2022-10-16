export interface Pessoa {
  nome: string
  sexo: string
  telefone: string
  tipo: string
  status: string
  dataNascimento: string
  endereco: Endereco[]
}

export interface Endereco {
  rua: string
  cep: string
  numero: string
  bairro: string
  cidade: string
  estado: string
  pais: string
  complemento?: string
}
