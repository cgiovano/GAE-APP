import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarCriterioComponent } from './gerenciar-criterio.component';

describe('GerenciarCriterioComponent', () => {
  let component: GerenciarCriterioComponent;
  let fixture: ComponentFixture<GerenciarCriterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerenciarCriterioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarCriterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
