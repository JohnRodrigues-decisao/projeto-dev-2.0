import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarLoteComponent } from './adicionar-lote.component';

describe('AdicionarLoteComponent', () => {
  let component: AdicionarLoteComponent;
  let fixture: ComponentFixture<AdicionarLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarLoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
