import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarAlunoComponent } from './gerenciar-aluno.component';

describe('GerenciarAlunoComponent', () => {
  let component: GerenciarAlunoComponent;
  let fixture: ComponentFixture<GerenciarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerenciarAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
