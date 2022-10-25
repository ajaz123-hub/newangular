import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedbooksresComponent } from './purchasedbooksres.component';

describe('PurchasedbooksresComponent', () => {
  let component: PurchasedbooksresComponent;
  let fixture: ComponentFixture<PurchasedbooksresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedbooksresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedbooksresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
