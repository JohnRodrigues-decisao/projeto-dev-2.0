import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComTituloComponent } from './com-titulo.component';

describe('ComTituloComponent', () => {
  let component: ComTituloComponent;
  let fixture: ComponentFixture<ComTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComTituloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
