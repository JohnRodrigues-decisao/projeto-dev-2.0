import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTitulosComponent } from './lista-titulos.component';

describe('ListaTitulosComponent', () => {
  let component: ListaTitulosComponent;
  let fixture: ComponentFixture<ListaTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTitulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
