import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailButtonComponent } from './gmail-button.component';

describe('GmailButtonComponent', () => {
  let component: GmailButtonComponent;
  let fixture: ComponentFixture<GmailButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmailButtonComponent]
    });
    fixture = TestBed.createComponent(GmailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
