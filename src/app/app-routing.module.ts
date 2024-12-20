import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAlunoComponent } from './aluno/editar-aluno/editar-aluno.component';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';
import { AlunoComponent } from './aluno/aluno.component';
import { TurmaComponent } from './turma/turma.component';
import { EditarTurmaComponent } from './turma/editar-turma/editar-turma.component';
import { CadastrarTurmaComponent } from './turma/cadastrar-turma/cadastrar-turma.component';
import { GerenciarTurmaComponent } from './turma/gerenciar-turma/gerenciar-turma.component';
import { AnoLetivoComponent } from './ano-letivo/ano-letivo.component';
import { EditarAnoLetivoComponent } from './ano-letivo/editar-ano-letivo/editar-ano-letivo.component';
import { CadastrarAnoLetivoComponent } from './ano-letivo/cadastrar-ano-letivo/cadastrar-ano-letivo.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { EditarAtividadeComponent } from './atividade/editar-atividade/editar-atividade.component';
import { CadastrarAtividadeComponent } from './atividade/cadastrar-atividade/cadastrar-atividade.component';
import { CriterioComponent } from './criterio/criterio.component';
import { EditarCriterioComponent } from './criterio/editar-criterio/editar-criterio.component';
import { CadastrarCriterioComponent } from './criterio/cadastrar-criterio/cadastrar-criterio.component';
import { CorrecaoComponent } from './correcao/correcao.component';
import { EditarCorrecaoComponent } from './correcao/editar-correcao/editar-correcao.component';
import { CadastrarCorrecaoComponent } from './correcao/cadastrar-correcao/cadastrar-correcao.component';
import { AdicionarAlunoTurmaComponent } from './turma/adicionar-aluno-turma/adicionar-aluno-turma.component';
import { GerenciarCriterioComponent } from './criterio/gerenciar-criterio/gerenciar-criterio.component';
import { GerenciarAtividadeComponent } from './atividade/gerenciar-atividade/gerenciar-atividade.component';
import { CadastrarQuestaoComponent } from './questao/cadastrar-questao/cadastrar-questao.component';

const routes: Routes = [
  {path: 'aluno', component: AlunoComponent}, 
  {path: 'aluno/editar/:id', component: EditarAlunoComponent}, 
  {path: 'aluno/cadastrar', component: CadastroAlunoComponent},
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
