import { Component, EventEmitter, Input, OnChanges, OnInit, output, Output, SimpleChanges } from '@angular/core';
import { AnoLetivo } from '../../../shared/models/ano_letivo.model';
import { Turma } from '../../../shared/models/turma.model';
import { TurmaService } from '../../../services/featuresServices/TurmaService';
import { AnoLetivoService } from '../../../services/featuresServices/AnoLetivoService';

@Component({
    selector: 'app-editar-turma',
    templateUrl: './editar-turma.component.html',
    styleUrl: './editar-turma.component.css',
    standalone: false
})

export class EditarTurmaComponent {
  @Input() turma: Turma;
  @Input() anosLetivos: AnoLetivo[];
  @Output() atualizacaoConcluida = new EventEmitter<void>();

  /*
  turma: Turma;
  anosLetivos: AnoLetivo[];

  ngOnChanges(changes: SimpleChanges): void {
      this.turma = this.turmaSelecionada;
      this.anosLetivos = this.anosLetivosLista;
      console.log("teste");
  }*/
  
  constructor(private turmaService: TurmaService, private anoLetivoService: AnoLetivoService) {}

  listarAnos() {
    const a: AnoLetivo | undefined = this.anosLetivos?.find((i) => i.id === this.turma?.ano_id);
    return(a?.ano);
  }

  atualizar() {
    this.turmaService.atualizar(this.turma.id, this.turma).subscribe( ()=> this.atualizacaoConcluida.emit() );
  }

  anoLetivoSelecionado(event: any) {
    this.turma.ano_id = Number(event.target.value);
  }
}