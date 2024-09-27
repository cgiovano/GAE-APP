import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCriterioComponent } from './editar-criterio.component';

describe('EditarCriterioComponent', () => {
  let component: EditarCriterioComponent;
  let fixture: ComponentFixture<EditarCriterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCriterioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCriterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
