import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedIdComponent } from './purchased-id.component';

describe('PurchasedIdComponent', () => {
  let component: PurchasedIdComponent;
  let fixture: ComponentFixture<PurchasedIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
