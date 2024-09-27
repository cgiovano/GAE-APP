import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCriterioComponent } from './cadastrar-criterio.component';

describe('CadastrarCriterioComponent', () => {
  let component: CadastrarCriterioComponent;
  let fixture: ComponentFixture<CadastrarCriterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarCriterioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCriterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
