import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Giocatori } from '../models/players.model';
import { Teams } from '../models/teams.model';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {
  obs!:Observable<Teams>
  data!: Teams

 // Richiesta al server e assegnazione dei dati
  constructor(public api: ApiService, public route:ActivatedRoute) {
    this.route.params.subscribe(p=>{
      this.obs = this.api.getTeam(p["id"])
      this.obs.subscribe(this.dosomething)
    })
  }

  dosomething = (data: Teams) => {
    this.data = data;
    console.log(this.data)
  }
}
