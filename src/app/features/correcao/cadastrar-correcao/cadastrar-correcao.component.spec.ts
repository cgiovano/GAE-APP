import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCorrecaoComponent } from './cadastrar-correcao.component';

describe('CadastrarCorrecaoComponent', () => {
  let component: CadastrarCorrecaoComponent;
  let fixture: ComponentFixture<CadastrarCorrecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarCorrecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCorrecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
