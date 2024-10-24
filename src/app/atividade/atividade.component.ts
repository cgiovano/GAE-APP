import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../models/atividade';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.css'
})
export class AtividadeComponent implements OnInit {
    atividades: Atividade[] = [];

  constructor(private httpClient: HttpClient, ) {}

  ngOnInit(): void {
    
  }
}
