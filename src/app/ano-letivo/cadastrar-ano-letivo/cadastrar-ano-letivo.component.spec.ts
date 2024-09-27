import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAnoLetivoComponent } from './cadastrar-ano-letivo.component';

describe('CadastrarAnoLetivoComponent', () => {
  let component: CadastrarAnoLetivoComponent;
  let fixture: ComponentFixture<CadastrarAnoLetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarAnoLetivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAnoLetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
