import {Component, OnInit} from '@angular/core';
import {AylarModel} from '../_models/aylar.model';

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
  aylar: AylarModel[] = [];
  durum = false;

  constructor() {
    this.arrayEkle();
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

  arrayEkle(): void {
    const q1: AylarModel = new AylarModel();
    q1.name = 'Ocak';
    q1.id = 1;
    this.aylar.push(q1);

    const q2: AylarModel = new AylarModel();
    q2.name = 'Şubat';
    q2.id = 2;
    this.aylar.push(q2);
    const q3: AylarModel = new AylarModel();
    q3.name = 'Mart';
    q3.id = 3;
    this.aylar.push(q3);
    this.aylar = this.aylar.filter(a => a.id === 2 || a.name.startsWith('O'));
  }
}
