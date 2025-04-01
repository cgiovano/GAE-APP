import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlunosAtividadesComponent } from './listar-alunos-atividades.component';

describe('ListarAlunosAtividadesComponent', () => {
  let component: ListarAlunosAtividadesComponent;
  let fixture: ComponentFixture<ListarAlunosAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAlunosAtividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAlunosAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
