import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviosComponent } from './avios.component';

describe('AviosComponent', () => {
  let component: AviosComponent;
  let fixture: ComponentFixture<AviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
