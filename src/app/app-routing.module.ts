import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAlunoComponent } from './features/aluno/editar-aluno/editar-aluno.component';
import { CadastrarAlunoComponent } from './features/aluno/cadastrar-aluno/cadastrar-aluno.component';
import { AlunoComponent } from './features/aluno/aluno.component';
import { TurmaComponent } from './features/turma/turma.component';
import { EditarTurmaComponent } from './features/turma/editar-turma/editar-turma.component';
import { CadastrarTurmaComponent } from './features/turma/cadastrar-turma/cadastrar-turma.component';
import { GerenciarTurmaComponent } from './features/turma/gerenciar-turma/gerenciar-turma.component';
import { AnoLetivoComponent } from './features/ano-letivo/ano-letivo.component';
import { EditarAnoLetivoComponent } from './features/ano-letivo/editar-ano-letivo/editar-ano-letivo.component';
import { CadastrarAnoLetivoComponent } from './features/ano-letivo/cadastrar-ano-letivo/cadastrar-ano-letivo.component';
import { AtividadeComponent } from './features/atividade/atividade.component';
import { EditarAtividadeComponent } from './features/atividade/editar-atividade/editar-atividade.component';
import { CadastrarAtividadeComponent } from './features/atividade/cadastrar-atividade/cadastrar-atividade.component';
import { CriterioComponent } from './features/criterio/criterio.component';
import { EditarCriterioComponent } from './features/criterio/editar-criterio/editar-criterio.component';
import { CadastrarCriterioComponent } from './features/criterio/cadastrar-criterio/cadastrar-criterio.component';
import { CorrecaoComponent } from './features/correcao/correcao.component';
import { EditarCorrecaoComponent } from './features/correcao/editar-correcao/editar-correcao.component';
import { CadastrarCorrecaoComponent } from './features/correcao/cadastrar-correcao/cadastrar-correcao.component';
import { AdicionarAlunoTurmaComponent } from './features/turma/adicionar-aluno-turma/adicionar-aluno-turma.component';
import { GerenciarCriterioComponent } from './features/criterio/gerenciar-criterio/gerenciar-criterio.component';
import { GerenciarAtividadeComponent } from './features/atividade/gerenciar-atividade/gerenciar-atividade.component';
import { CadastrarQuestaoComponent } from './features/questao/cadastrar-questao/cadastrar-questao.component';
import { Resolver } from './services/ResolveService';

const routes: Routes = [
  {path: 'aluno', component: AlunoComponent}, 
  {path: 'aluno/editar/:id', component: EditarAlunoComponent}, 
  {path: 'aluno/cadastrar', component: CadastrarAlunoComponent},
  {path: 'turma', component: TurmaComponent}, 
  {path: 'turma/editar/:id', component: EditarTurmaComponent}, 
  {path: 'turma/cadastrar', component: CadastrarTurmaComponent}, 
  {path: 'turma/gerenciar/:id', component: GerenciarTurmaComponent},
  {path: 'turma/gerenciar/:id/adicionar-aluno-turma', component: AdicionarAlunoTurmaComponent}, 
  {path: 'ano-letivo', component: AnoLetivoComponent}, 
  {path: 'ano-letivo/editar/:id', component: EditarAnoLetivoComponent}, 
  {path: 'ano-letivo/cadastrar', component: CadastrarAnoLetivoComponent}, 
  {path: 'atividade', component: AtividadeComponent}, 
  {path: 'atividade/editar/:id', component: EditarAtividadeComponent}, 
  {path: 'atividade/cadastrar', component: CadastrarAtividadeComponent}, 
  {path: 'atividade/gerenciar/:id', component: GerenciarAtividadeComponent},
  {path: 'criterio', component: CriterioComponent}, 
  {path: 'criterio/editar/:id', component: EditarCriterioComponent}, 
  {path: 'criterio/gerenciar/:id', component: GerenciarCriterioComponent}, 
  {path: 'criterio/cadastrar', component: CadastrarCriterioComponent}, 
  {path: 'correcao', component: CorrecaoComponent}, 
  {path: 'correcao/editar/:id', component: EditarCorrecaoComponent}, 
  {path: 'correcao/cadastrar', component: CadastrarCorrecaoComponent}, 
  {path: 'atividade/gerenciar/:id/questao/cadastrar', component: CadastrarQuestaoComponent}
  ];
    @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
