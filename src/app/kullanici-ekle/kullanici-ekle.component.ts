import {Component, OnInit} from '@angular/core';
import {KullaniciModel} from '../_models/kullanici.model';
import {HttpClient} from '@angular/common/http';
import {AlertifyService} from '../alertify.service';

@Component({
  selector: 'app-kullanici-ekle',
  templateUrl: './kullanici-ekle.component.html',
  styleUrls: ['./kullanici-ekle.component.scss']
})
export class KullaniciEkleComponent implements OnInit {
  newUser: KullaniciModel = new KullaniciModel();

  constructor(private api: HttpClient, private toast : AlertifyService) {
  }

  ngOnInit(): void {
  }

  kaydet(): void {
    console.log(this.newUser.genderDTO === '1');
    this.newUser.gender = this.newUser.genderDTO === '1';
    this.api.post('http://192.168.1.47:9898/api/kullanici', this.newUser).subscribe(a => {
      console.log(a);
      this.newUser = new KullaniciModel();
      // @ts-ignore
      this.toast.success('Yeni kullanıcı ' + a.id + ' numarası ile eklenmiştir');
    });
  }
}
