import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemTituloComponent } from './sem-titulo.component';

describe('SemTituloComponent', () => {
  let component: SemTituloComponent;
  let fixture: ComponentFixture<SemTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemTituloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
