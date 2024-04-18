import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaPromissoriaComponent } from './nota-promissoria.component';

describe('NotaPromissoriaComponent', () => {
  let component: NotaPromissoriaComponent;
  let fixture: ComponentFixture<NotaPromissoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotaPromissoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotaPromissoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
