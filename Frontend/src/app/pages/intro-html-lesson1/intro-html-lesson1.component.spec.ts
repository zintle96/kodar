import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroHtmlLesson1Component } from './intro-html-lesson1.component';

describe('IntroHtmlLesson1Component', () => {
  let component: IntroHtmlLesson1Component;
  let fixture: ComponentFixture<IntroHtmlLesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroHtmlLesson1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroHtmlLesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
