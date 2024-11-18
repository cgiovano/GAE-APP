import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlBaseService } from '../../UrlBaseService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-atividade',
  templateUrl: './gerenciar-atividade.component.html',
  styleUrl: './gerenciar-atividade.component.css'
})
export class GerenciarAtividadeComponent implements OnInit {
  idAtividade: number;
  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService, private activatedRoute: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.idAtividade = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idAtividade);
  }


}
