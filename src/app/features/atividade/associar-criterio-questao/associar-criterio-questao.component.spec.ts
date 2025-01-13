import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociarCriterioQuestaoComponent } from './associar-criterio-questao.component';

describe('AssociarCriterioQuestaoComponent', () => {
  let component: AssociarCriterioQuestaoComponent;
  let fixture: ComponentFixture<AssociarCriterioQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociarCriterioQuestaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociarCriterioQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
