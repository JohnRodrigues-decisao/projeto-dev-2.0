import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarInicialComponent } from './adicionar-inicial.component';

describe('AdicionarInicialComponent', () => {
  let component: AdicionarInicialComponent;
  let fixture: ComponentFixture<AdicionarInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
