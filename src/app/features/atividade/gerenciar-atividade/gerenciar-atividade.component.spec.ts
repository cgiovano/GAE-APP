import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarAtividadeComponent } from './gerenciar-atividade.component';

describe('GerenciarAtividadeComponent', () => {
  let component: GerenciarAtividadeComponent;
  let fixture: ComponentFixture<GerenciarAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerenciarAtividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
