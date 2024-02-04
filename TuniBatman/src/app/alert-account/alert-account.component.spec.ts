import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAccountComponent } from './alert-account.component';

describe('AlertAccountComponent', () => {
  let component: AlertAccountComponent;
  let fixture: ComponentFixture<AlertAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
