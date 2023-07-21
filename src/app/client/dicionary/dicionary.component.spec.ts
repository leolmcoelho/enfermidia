import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicionaryComponent } from './dicionary.component';

describe('DicionaryComponent', () => {
  let component: DicionaryComponent;
  let fixture: ComponentFixture<DicionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DicionaryComponent]
    });
    fixture = TestBed.createComponent(DicionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
