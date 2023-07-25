import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallPwaComponent } from './install-pwa.component';

describe('InstallPwaComponent', () => {
  let component: InstallPwaComponent;
  let fixture: ComponentFixture<InstallPwaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallPwaComponent]
    });
    fixture = TestBed.createComponent(InstallPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
