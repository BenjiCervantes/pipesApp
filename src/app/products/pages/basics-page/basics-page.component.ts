import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {
  public nameLower: string = 'benji';
  public nameUpper: string = 'BENJI';
  public fullName: string = 'BeNjI CeRvAnTeS';
  public customDate: Date = new Date();
}
