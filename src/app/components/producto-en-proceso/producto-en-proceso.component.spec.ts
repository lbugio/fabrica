import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEnProcesoComponent } from './producto-en-proceso.component';

describe('ProductoEnProcesoComponent', () => {
  let component: ProductoEnProcesoComponent;
  let fixture: ComponentFixture<ProductoEnProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoEnProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEnProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
