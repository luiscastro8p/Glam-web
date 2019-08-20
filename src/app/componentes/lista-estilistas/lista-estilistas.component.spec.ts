import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstilistasComponent } from './lista-estilistas.component';

describe('ListaEstilistasComponent', () => {
  let component: ListaEstilistasComponent;
  let fixture: ComponentFixture<ListaEstilistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstilistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstilistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
