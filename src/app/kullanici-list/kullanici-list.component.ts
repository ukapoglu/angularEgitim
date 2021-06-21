import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KullaniciModel} from '../_models/kullanici.model';
import {AlertifyService} from '../alertify.service';

@Component({
  selector: 'app-kullanici-list',
  templateUrl: './kullanici-list.component.html',
  styleUrls: ['./kullanici-list.component.scss']
})
export class KullaniciListComponent implements OnInit {
  kullanicilar: KullaniciModel[] = [];
  state = 0;
  editUser: KullaniciModel = new KullaniciModel();

  constructor(private api: HttpClient, private alert: AlertifyService) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers(): void {
    const q = this.api.get('http://192.168.1.47:9898/api/kullanici').subscribe(a => {
      // @ts-ignore
      this.kullanicilar = a;
      this.kullanicilar.forEach(b => {
        b.gender ? b.genderDTO = 'Bay' : b.genderDTO = 'Bayan';
      });
    });

  }

  stateFn(n: number): void {
    if (n === 0) {
      this.getUsers();
    }
    this.state = n;
  }

  edit(k: KullaniciModel): void {
    this.stateFn(2);
    this.editUser = k;
    this.editUser.gender ? this.editUser.genderDTO = '1' : this.editUser.genderDTO = '0';
  }

  update(): void {

    this.editUser.gender = this.editUser.genderDTO === '1';
    this.api.put('http://192.168.1.47:9898/api/kullanici/' + this.editUser.id, this.editUser).subscribe(a => {
      console.log(a);
      this.stateFn(0);
      this.alert.success('Güncelleme başarılı');
    });
  }
}
