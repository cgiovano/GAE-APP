import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuirAtividadeComponent } from './atribuir-atividade.component';

describe('AtribuirAtividadeComponent', () => {
  let component: AtribuirAtividadeComponent;
  let fixture: ComponentFixture<AtribuirAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuirAtividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtribuirAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
