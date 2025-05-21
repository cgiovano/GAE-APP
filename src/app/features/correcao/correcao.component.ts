import { Component, OnInit } from '@angular/core';
import { AnoLetivo } from '../../shared/models/ano_letivo.model';
import { AnoLetivoService } from '../../services/featuresServices/AnoLetivoService';
import { TurmaService } from '../../services/featuresServices/TurmaService';
import { Turma } from '../../shared/models/turma.model';
import { AtividadeService } from '../../services/featuresServices/AtividadeService';
import { subscribe } from 'diagnostics_channel';
import { Atividade } from '../../shared/models/atividade.model';

@Component({
    selector: 'app-correcao',
    templateUrl: './correcao.component.html',
    styleUrl: './correcao.component.css',
    standalone: false
})
export class CorrecaoComponent implements OnInit {

  atividades: Atividade[];

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit(): void {
    this.atividadeService.listarTodos().subscribe((dados) => this.atividades = dados);
  }
}
