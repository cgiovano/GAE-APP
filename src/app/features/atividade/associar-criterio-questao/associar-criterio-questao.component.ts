import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Criterio } from '../../../shared/models/criterio.model';
import { Target } from '@angular/compiler';
import { CriterioQuestao } from '../../../shared/models/criterio_questao.model';

@Component({
  selector: 'app-associar-criterio-questao',
  templateUrl: './associar-criterio-questao.component.html',
  styleUrl: './associar-criterio-questao.component.css'
})
export class AssociarCriterioQuestaoComponent implements OnChanges{
  @Input() criterios: Criterio[] = [];
  @Input() idQuestao: number = 0;
  @Output() associacaoConcluida = new EventEmitter<void>();

  criteriosQuestao: CriterioQuestao[] = [];

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.criterios);
  }

  confirmarAssociacao() {
    this.associacaoConcluida.emit();
  }

  associarCriterioQuestao(target: any) {
    console.log(`Valor: ${target.checked} e id: ${target.value}`);

    if(target.checked === true && this.criterios.find((criterio) => criterio.id !== target.value)) {
      this.criteriosQuestao.push({id_questao: this.idQuestao, id_criterio: target.value});
    } else {
      let i = this.criteriosQuestao.findIndex((criterio)=>criterio.id_criterio===target.value && criterio.id_questao === this.idQuestao)
      this.criteriosQuestao.splice(i);
    }
  }

  verificarItemLista(estado: boolean, idBusca: number, lista: CriterioQuestao[]) {
    
  }
}
