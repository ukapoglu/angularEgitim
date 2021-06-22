import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AracComponent } from './arac.component';

describe('AracComponent', () => {
  let component: AracComponent;
  let fixture: ComponentFixture<AracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
