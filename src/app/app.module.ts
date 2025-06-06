import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarAlunoComponent } from './features/aluno/cadastrar-aluno/cadastrar-aluno.component';
import { EditarAlunoComponent } from './features/aluno/editar-aluno/editar-aluno.component';
import { AtribuirAtividadeComponent } from './features/atividade/atribuir-atividade/atribuir-atividade.component';
import { GerenciarAtividadeComponent } from './features/atividade/gerenciar-atividade/gerenciar-atividade.component';
import { CadastrarCorrecaoComponent } from './features/correcao/cadastrar-correcao/cadastrar-correcao.component';
import { EditarCorrecaoComponent } from './features/correcao/editar-correcao/editar-correcao.component';
import { EditarCriterioComponent } from './features/criterio/editar-criterio/editar-criterio.component';
import { CadastrarCriterioComponent } from './features/criterio/cadastrar-criterio/cadastrar-criterio.component';
import { GerenciarCriterioComponent } from './features/criterio/gerenciar-criterio/gerenciar-criterio.component';
import { GerenciarTurmaComponent } from './features/turma/gerenciar-turma/gerenciar-turma.component';
import { EditarTurmaComponent } from './features/turma/editar-turma/editar-turma.component';
import { CadastrarTurmaComponent } from './features/turma/cadastrar-turma/cadastrar-turma.component';
import { AlunoComponent } from './features/aluno/aluno.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AnoLetivoComponent } from './features/ano-letivo/ano-letivo.component';
import { CadastrarAnoLetivoComponent } from './features/ano-letivo/cadastrar-ano-letivo/cadastrar-ano-letivo.component';
import { EditarAnoLetivoComponent } from './features/ano-letivo/editar-ano-letivo/editar-ano-letivo.component';
import { TurmaComponent } from './features/turma/turma.component';
import { AtividadeComponent } from './features/atividade/atividade.component';
import { CadastrarAtividadeComponent } from './features/atividade/cadastrar-atividade/cadastrar-atividade.component';
import { CriterioComponent } from './features/criterio/criterio.component';
import { CorrecaoComponent } from './features/correcao/correcao.component';
import { AdicionarAlunoTurmaComponent } from './features/turma/adicionar-aluno-turma/adicionar-aluno-turma.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CadastrarQuestaoComponent } from './features/questao/cadastrar-questao/cadastrar-questao.component';
import { ModalModule } from './shared/components/modal/modal.module';
import { AssociarCriterioQuestaoComponent } from './features/atividade/associar-criterio-questao/associar-criterio-questao.component';
import { ListarAlunosAtividadesComponent } from './features/correcao/listar-alunos-atividades/listar-alunos-atividades.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAlunoComponent,
    EditarAlunoComponent,
    AtribuirAtividadeComponent,
    GerenciarAtividadeComponent,
    CadastrarCorrecaoComponent,
    EditarCorrecaoComponent,
    EditarCriterioComponent,
    CadastrarCriterioComponent,
    GerenciarCriterioComponent,
    GerenciarTurmaComponent,
    EditarTurmaComponent,
    CadastrarTurmaComponent,
    AlunoComponent,
    AnoLetivoComponent,
    CadastrarAnoLetivoComponent,
    EditarAnoLetivoComponent,
    TurmaComponent,
    AtividadeComponent,
    CadastrarAtividadeComponent,
    CriterioComponent,
    CorrecaoComponent,
    AdicionarAlunoTurmaComponent,
    CadastrarQuestaoComponent,
    AssociarCriterioQuestaoComponent,
    ListarAlunosAtividadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ModalModule, 
    CommonModule
  ],
  providers: [provideHttpClient(), DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
