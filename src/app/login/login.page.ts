import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  nomeUser = '';
  login = '';
  senha = '';

  constructor(private dadoUsers: UserService) { }

  ngOnInit() {

  }

entrar (login: string, senha: string ){
  console.log("-----> " + login + " - " + senha);
  if (this.dadoUsers.getEmail() == login && this.dadoUsers.getSenha() == senha){
    this.nomeUser = "Bem-vindo(a) " + this.dadoUsers.getNome();
  } else {
    this.nomeUser = "Login ou senha invalidos!"
  }

  this.login = '';
  this.senha = '';

}

}
