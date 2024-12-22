import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';
import { EditarAlunoComponent } from './aluno/editar-aluno/editar-aluno.component';
import { GerenciarAlunoComponent } from './aluno/gerenciar-aluno/gerenciar-aluno.component';
import { EditarAtividadeComponent } from './atividade/editar-atividade/editar-atividade.component';
import { GerenciarAtividadeComponent } from './atividade/gerenciar-atividade/gerenciar-atividade.component';
import { CadastrarCorrecaoComponent } from './correcao/cadastrar-correcao/cadastrar-correcao.component';
import { EditarCorrecaoComponent } from './correcao/editar-correcao/editar-correcao.component';
import { EditarCriterioComponent } from './criterio/editar-criterio/editar-criterio.component';
import { CadastrarCriterioComponent } from './criterio/cadastrar-criterio/cadastrar-criterio.component';
import { GerenciarCriterioComponent } from './criterio/gerenciar-criterio/gerenciar-criterio.component';
import { GerenciarTurmaComponent } from './turma/gerenciar-turma/gerenciar-turma.component';
import { EditarTurmaComponent } from './turma/editar-turma/editar-turma.component';
import { CadastrarTurmaComponent } from './turma/cadastrar-turma/cadastrar-turma.component';
import { AlunoComponent } from './aluno/aluno.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AnoLetivoComponent } from './ano-letivo/ano-letivo.component';
import { CadastrarAnoLetivoComponent } from './ano-letivo/cadastrar-ano-letivo/cadastrar-ano-letivo.component';
import { EditarAnoLetivoComponent } from './ano-letivo/editar-ano-letivo/editar-ano-letivo.component';
import { TurmaComponent } from './turma/turma.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { CadastrarAtividadeComponent } from './atividade/cadastrar-atividade/cadastrar-atividade.component';
import { CriterioComponent } from './criterio/criterio.component';
import { CorrecaoComponent } from './correcao/correcao.component';
import { AdicionarAlunoTurmaComponent } from './turma/adicionar-aluno-turma/adicionar-aluno-turma.component';
import { DatePipe } from '@angular/common';
import { CadastrarQuestaoComponent } from './questao/cadastrar-questao/cadastrar-questao.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoComponent,
    EditarAlunoComponent,
    GerenciarAlunoComponent,
    EditarAtividadeComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ModalModule
  ],
  providers: [provideHttpClient(), DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
