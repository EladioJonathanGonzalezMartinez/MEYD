import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaunaPage } from './fauna.page';

describe('FaunaPage', () => {
  let component: FaunaPage;
  let fixture: ComponentFixture<FaunaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaunaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
