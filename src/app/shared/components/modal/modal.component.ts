import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  visivel: boolean = false;
  titulo: any;

  Abrir(titulo: string) {
    this.titulo = titulo;
    this.visivel = true;
  }

  Fechar() {
    this.visivel = false;
  }
}
