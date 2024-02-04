import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPartComponent } from './community-part.component';

describe('CommunityPartComponent', () => {
  let component: CommunityPartComponent;
  let fixture: ComponentFixture<CommunityPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
