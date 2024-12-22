import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCorrecaoComponent } from './editar-correcao.component';

describe('EditarCorrecaoComponent', () => {
  let component: EditarCorrecaoComponent;
  let fixture: ComponentFixture<EditarCorrecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCorrecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCorrecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
