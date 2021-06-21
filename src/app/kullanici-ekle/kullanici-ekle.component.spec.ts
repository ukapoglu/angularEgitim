import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciEkleComponent } from './kullanici-ekle.component';

describe('KullaniciEkleComponent', () => {
  let component: KullaniciEkleComponent;
  let fixture: ComponentFixture<KullaniciEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
