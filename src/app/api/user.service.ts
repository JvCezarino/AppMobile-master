import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  nome = "Joao"
  email ="joao@teste.com"
  senha = "123"

  constructor() { }

  getNome(){
    return this.nome;
  }

  getEmail(){
    return this.email;
  }

  getSenha(){
    return this.senha;
  }

  setNome(n: string){
    this.nome = n;
  }
  
}
