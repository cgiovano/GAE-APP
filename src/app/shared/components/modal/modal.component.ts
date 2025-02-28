import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  visivel: boolean = false;
  titulo: any;
  @Output() eventoFechar: EventEmitter<void> = new EventEmitter<void>();

  Abrir(titulo: string) {
    this.titulo = titulo;
    this.visivel = true;
  }

  Fechar() {
    this.visivel = false;
    this.eventoFechar.emit();
  }
}
