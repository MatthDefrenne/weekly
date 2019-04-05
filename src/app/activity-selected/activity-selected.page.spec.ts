import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySelectedPage } from './activity-selected.page';

describe('ActivitySelectedPage', () => {
  let component: ActivitySelectedPage;
  let fixture: ComponentFixture<ActivitySelectedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySelectedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySelectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
