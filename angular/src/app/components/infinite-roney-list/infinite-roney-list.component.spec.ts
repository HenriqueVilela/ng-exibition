import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteRoneyListComponent } from './infinite-roney-list.component';

describe('InfiniteRoneyListComponent', () => {
  let component: InfiniteRoneyListComponent;
  let fixture: ComponentFixture<InfiniteRoneyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteRoneyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfiniteRoneyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
