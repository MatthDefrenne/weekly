import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step7Page } from './step7.page';

describe('Step7Page', () => {
  let component: Step7Page;
  let fixture: ComponentFixture<Step7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
