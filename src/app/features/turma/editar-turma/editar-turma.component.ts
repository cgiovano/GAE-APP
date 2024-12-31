import { Component, EventEmitter, Input, OnChanges, OnInit, output, Output, SimpleChanges } from '@angular/core';
import { AnoLetivo } from '../../../shared/models/ano_letivo.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from '../../../shared/models/turma.model';
import { TurmaService } from '../../../services/featuresServices/TurmaService';
import { AnoLetivoService } from '../../../services/featuresServices/AnoLetivoService';

@Component({
  selector: 'app-editar-turma',
  templateUrl: './editar-turma.component.html',
  styleUrl: './editar-turma.component.css'
})

export class EditarTurmaComponent implements OnChanges {
  @Input() turmaSelecionada: Turma;
  @Output() atualizacaoConcluida = new EventEmitter<void>();

  turma: Turma = { id: 0, identificacao: '', serie: '', ano_id: 0 };
  anosLetivos: AnoLetivo[] = [];

  constructor(private turmaService: TurmaService, private anoLetivoService: AnoLetivoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.turma = this.turmaSelecionada;

    this.anoLetivoService.listarTodos().subscribe((dados) => this.anosLetivos = dados);
  }

  listarAnos() {
    const a: AnoLetivo | undefined = this.anosLetivos.find((i) => i.id === this.turma.ano_id);
    return(a?.ano);
  }

  atualizar() {
    this.turmaService.atualizar(this.turma.id, this.turma).subscribe( ()=> this.atualizacaoConcluida.emit() );
  }

  anoLetivoSelecionado(event: any) {
    this.turma.ano_id = Number(event.target.value);
  }
}
