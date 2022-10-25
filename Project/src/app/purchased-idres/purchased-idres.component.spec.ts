import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedIdresComponent } from './purchased-idres.component';

describe('PurchasedIdresComponent', () => {
  let component: PurchasedIdresComponent;
  let fixture: ComponentFixture<PurchasedIdresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedIdresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedIdresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
