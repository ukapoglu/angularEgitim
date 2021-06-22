import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MarkaModel} from '../_models/marka.model';
import {AlertifyService} from '../alertify.service';

@Component({
  selector: 'app-marka',
  templateUrl: './marka.component.html',
  styleUrls: ['./marka.component.scss']
})
export class MarkaComponent implements OnInit {
  markalar: MarkaModel[] = [];
  mark: MarkaModel = new MarkaModel();
  // 0=>listele, 1=yeni, 2=edit
  durum = 0;

  constructor(private api: HttpClient, private alert: AlertifyService) {
    this.markaListele();
  }

  markaListele(): void {
    this.durum = 0;
    this.api.get('http://192.168.1.47:9898/api/marka').subscribe(a => {
      // @ts-ignore
      this.markalar = a;
    });
  }

  ngOnInit(): void {
  }

  changeState(a: number): void {
    this.durum = a;
  }

  saveMarka(): void {
    this.api.post('http://192.168.1.47:9898/api/marka', this.mark).subscribe(a => {
      this.alert.success('Marka oluşturuldu');
      this.mark = new MarkaModel();
      this.markaListele();
    });
  }

  duzenleFn(a: MarkaModel): void {
    this.mark = a;
    this.durum = 2;
  }

  updateMarka(): void {
    this.api.put('http://192.168.1.47:9898/api/marka/' + this.mark.id, this.mark).subscribe(a => {
      this.alert.success('Marka güncellendi');
      this.mark = new MarkaModel();
      this.markaListele();
    });
  }
}
