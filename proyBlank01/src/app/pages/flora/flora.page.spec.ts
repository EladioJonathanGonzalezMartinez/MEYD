import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloraPage } from './flora.page';

describe('FloraPage', () => {
  let component: FloraPage;
  let fixture: ComponentFixture<FloraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
