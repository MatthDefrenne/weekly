import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step8Page } from './step8.page';

describe('Step8Page', () => {
  let component: Step8Page;
  let fixture: ComponentFixture<Step8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
