import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router){}

  itens = [
    {nome:'Login', url: '/login'},
    {nome:'Produtos', url: '/produtos'},    
    {nome:'Clientes', url: '/clientes'}        
    ];

    irParaPagina(url: string){
      this.router.navigate([url]); // Navega para a URL correspondente
    
    }

}
