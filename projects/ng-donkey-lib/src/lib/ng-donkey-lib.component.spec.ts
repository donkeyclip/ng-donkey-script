import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDonkeyLibComponent } from './ng-donkey-lib.component';

describe('NgDonkeyLibComponent', () => {
  let component: NgDonkeyLibComponent;
  let fixture: ComponentFixture<NgDonkeyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDonkeyLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDonkeyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
