import {Component, OnInit} from '@angular/core';
import {FirstClass} from '../_models/FirstClass';
import {AlertifyService} from '../alertify.service';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss']
})
export class BootComponent implements OnInit {
  obje: FirstClass = new FirstClass();
  canPost = false;

  constructor(private alert: AlertifyService) {
    console.log(this.obje.gsm);
    // this.obje.gsm = '5545734846';
    // this.obje.id = 1;
    // this.obje.name = 'Utku Kapoğlu';
  }

  ngOnInit(): void {
  }

  kaydet(): void {
    if (this.obje.gsm.length < 10) {
      this.canPost = false;
    } else if (this.obje.name.length < 5) {
      this.canPost = false;
    } else {
      this.canPost = true;
    }

    if(this.canPost){
      this.alert.success('Kayıt başarılı');
    } else {
      this.alert.error('Eksik bilgiler var');
    }

  }
}
