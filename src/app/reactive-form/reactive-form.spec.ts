import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahaveerTourAgencyComponent } from './reactive-form';

describe('MahaveerTourAgencyComponent', () => {
  let component: MahaveerTourAgencyComponent;
  let fixture: ComponentFixture<MahaveerTourAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahaveerTourAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahaveerTourAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
