import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarTurmaComponent } from './gerenciar-turma.component';

describe('GerenciarTurmaComponent', () => {
  let component: GerenciarTurmaComponent;
  let fixture: ComponentFixture<GerenciarTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerenciarTurmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
