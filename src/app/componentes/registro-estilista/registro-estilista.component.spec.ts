import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstilistaComponent } from './registro-estilista.component';

describe('RegistroEstilistaComponent', () => {
  let component: RegistroEstilistaComponent;
  let fixture: ComponentFixture<RegistroEstilistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEstilistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
