import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionExempleComponent } from './interaction-exemple.component';

describe('InteractionExempleComponent', () => {
  let component: InteractionExempleComponent;
  let fixture: ComponentFixture<InteractionExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionExempleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractionExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
