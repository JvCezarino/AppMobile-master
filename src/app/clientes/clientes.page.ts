import { Component, OnInit } from '@angular/core';
import { IonAlert, IonButton, IonContent, IonPopover, IonAccordion, IonAccordionGroup, IonItem, IonLabel,
  IonAvatar, IonHeader, IonIcon, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonTitle, IonToolbar, IonSearchbar  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pin, share, trash } from 'ionicons/icons';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: false,
})
export class ClientesPage implements OnInit {

  alertButtons = ['Action'];

  constructor() { 
    addIcons({ pin, share, trash,});
  }
  clientes = [
    {nome:'Lucas Andrade',},
    {nome:'Sofia Lima',},
    {nome:'Gabriel Monteiro',},
    {nome:'Isabela Torres',},
    {nome:'Rafael Oliveira',},
    {nome:'Lívia Mendes',},
    {nome:'Bruno Carvalho',},
    {nome:'Camila Duarte',},
    {nome:'Enzo Martins',},
    {nome:'Marina Costa',},
    {nome:'Felipe Almeida',},
    {nome:'Júlia Fernandes',},

  ]
  ngOnInit() {
  }

}
