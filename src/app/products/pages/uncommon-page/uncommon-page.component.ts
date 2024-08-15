import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name: string ='Benji';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Melissa', 'Eduardo']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando' ,
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //Key value pipe
  public person = {
    name: 'Benji',
    age: 29,
    address: 'México'
  }

  //Async pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap( value => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })

}
