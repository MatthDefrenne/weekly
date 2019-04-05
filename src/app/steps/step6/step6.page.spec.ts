import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step6Page } from './step6.page';

describe('Step6Page', () => {
  let component: Step6Page;
  let fixture: ComponentFixture<Step6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
