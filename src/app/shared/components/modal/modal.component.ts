import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  mostrar: boolean = false;
  component: any;
  titulo: any;

  Open(titulo: string) {
    this.titulo = titulo;
    this.mostrar = true;
  }

  Close() {
    this.mostrar = false;
  }
}
