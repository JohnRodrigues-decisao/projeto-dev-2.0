import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOperationsComponent } from './no-operations.component';

describe('NoOperationsComponent', () => {
  let component: NoOperationsComponent;
  let fixture: ComponentFixture<NoOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
