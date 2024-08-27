import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveComponent } from './rective.component';

describe('RectiveComponent', () => {
  let component: RectiveComponent;
  let fixture: ComponentFixture<RectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
