import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularEgitim';
  sayi1 = 1;
  sayi2 = 3;
  // @ts-ignore
  sayi3: number;
  deg1 = true;

}
