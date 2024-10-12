import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-criterio',
  templateUrl: './cadastrar-criterio.component.html',
  styleUrl: './cadastrar-criterio.component.css'
})
export class CadastrarCriterioComponent {
  tipo_criterio: number = 0; 

  alterarTipoCriterio(tipo_criterio: number) {
    this.tipo_criterio = tipo_criterio;
  }
}
