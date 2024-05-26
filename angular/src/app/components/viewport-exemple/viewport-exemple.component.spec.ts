import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportExempleComponent } from './viewport-exemple.component';

describe('ViewportExempleComponent', () => {
  let component: ViewportExempleComponent;
  let fixture: ComponentFixture<ViewportExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewportExempleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewportExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
