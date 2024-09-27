import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnoLetivoComponent } from './editar-ano-letivo.component';

describe('EditarAnoLetivoComponent', () => {
  let component: EditarAnoLetivoComponent;
  let fixture: ComponentFixture<EditarAnoLetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarAnoLetivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAnoLetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
