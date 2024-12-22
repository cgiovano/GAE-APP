import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAlunoTurmaComponent } from './adicionar-aluno-turma.component';

describe('AdicionarAlunoTurmaComponent', () => {
  let component: AdicionarAlunoTurmaComponent;
  let fixture: ComponentFixture<AdicionarAlunoTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarAlunoTurmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarAlunoTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
