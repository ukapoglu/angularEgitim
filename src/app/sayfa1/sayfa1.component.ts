import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sayfa1',
  templateUrl: './sayfa1.component.html',
  styleUrls: ['./sayfa1.component.scss']
})
export class Sayfa1Component implements OnInit {
  sayi1 = 1;
  sayi2 = 2;
  // @ts-ignore
  sayi3: number;
  liste = [1, 2, 3, 4, 5, 7, 6, 5, 3, 32, 2, 1213];

  constructor() {

  }

  ngOnInit(): void {
    this.topla();
  }

  topla(): void {
    this.sayi3 = this.sayi1 + this.sayi2;
  }

  hesapla(l: number): string {
    console.log(l);
    if (l > 5) {
      return 'qwe';
    } else {
      return 'pppp';
    }
  }
}
