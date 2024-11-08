import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInfoComponent } from './meeting-info.component';

describe('MeetingInfoComponent', () => {
  let component: MeetingInfoComponent;
  let fixture: ComponentFixture<MeetingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
