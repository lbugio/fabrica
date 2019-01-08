import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAvioComponent } from './formulario-avio.component';

describe('FormularioAvioComponent', () => {
  let component: FormularioAvioComponent;
  let fixture: ComponentFixture<FormularioAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
