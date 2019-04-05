import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step9Page } from './step9.page';

describe('Step9Page', () => {
  let component: Step9Page;
  let fixture: ComponentFixture<Step9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
