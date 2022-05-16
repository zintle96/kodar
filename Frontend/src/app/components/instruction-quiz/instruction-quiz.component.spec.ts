import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionQuizComponent } from './instruction-quiz.component';

describe('InstructionQuizComponent', () => {
  let component: InstructionQuizComponent;
  let fixture: ComponentFixture<InstructionQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
