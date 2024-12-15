import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarQuestaoComponent } from './cadastrar-questao.component';

describe('CadastrarQuestaoComponent', () => {
  let component: CadastrarQuestaoComponent;
  let fixture: ComponentFixture<CadastrarQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarQuestaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
