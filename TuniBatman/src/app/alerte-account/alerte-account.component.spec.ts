import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteAccountComponent } from './alerte-account.component';

describe('AlerteAccountComponent', () => {
  let component: AlerteAccountComponent;
  let fixture: ComponentFixture<AlerteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlerteAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlerteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
