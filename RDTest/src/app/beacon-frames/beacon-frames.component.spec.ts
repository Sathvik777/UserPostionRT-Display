import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconFramesComponent } from './beacon-frames.component';

describe('BeaconFramesComponent', () => {
  let component: BeaconFramesComponent;
  let fixture: ComponentFixture<BeaconFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaconFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaconFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
