import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoClassComponent } from './demo-class.component';

describe('DemoClassComponent', () => {
  let component: DemoClassComponent;
  let fixture: ComponentFixture<DemoClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
