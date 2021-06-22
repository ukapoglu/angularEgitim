import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AracModel} from '../_models/arac.model';
import {MarkaModel} from '../_models/marka.model';
import {AlertifyService} from '../alertify.service';

@Component({
  selector: 'app-arac',
  templateUrl: './arac.component.html',
  styleUrls: ['./arac.component.scss']
})
export class AracComponent implements OnInit {
  durum = 0;
  araclar: AracModel[] = [];
  arac: AracModel = new AracModel();
  markalar: MarkaModel[] = [];

  constructor(private api: HttpClient, private alert: AlertifyService) {
    this.aracListele();
    this.markaListele();
  }

  aracListele(): void {
    this.durum = 0;
    this.api.get('http://192.168.1.47:9898/api/arac').subscribe(a => {
      // @ts-ignore
      this.araclar = a;
    });
  }

  markaListele(): void {
    this.api.get('http://192.168.1.47:9898/api/marka').subscribe(a => {
      // @ts-ignore
      this.markalar = a;
    });
  }

  ngOnInit(): void {
  }

  statuFn(a: number): void {
    this.durum = a;
  }

  kaydetFn(): void {
    this.arac.vites = this.arac.vitesDTO === 'true';
    this.api.post('http://192.168.1.47:9898/api/arac', this.arac).subscribe(a => {
      this.alert.success('Araç eklendi');
      this.arac = new AracModel();
      this.aracListele();
    });
  }

  // tslint:disable-next-line:typedef
  duzenleFn(a: AracModel) {
    this.arac = a;
    if (this.arac.vites) {
        this.arac.vitesDTO = 'true';
    } else {
      this.arac.vitesDTO = 'false';
    }
    this.durum = 2;

  }

  guncelleFn(): void {
    this.api.put('http://192.168.1.47:9898/api/arac/' + this.arac.id, this.arac).subscribe(a => {
      this.alert.success('Araç gğncelledi');
      this.arac = new AracModel();
      this.aracListele();
    });
  }
}
