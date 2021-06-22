import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkaComponent } from './marka.component';

describe('MarkaComponent', () => {
  let component: MarkaComponent;
  let fixture: ComponentFixture<MarkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
