import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Squadre } from '../models/teams.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title= 'NBAProject'
  obs!:Observable<Squadre>
  data!:Squadre

 // Richiesta al server e assegnazione dei dati
  constructor(public http: HttpClient) {
    this.obs = this.http.get<Squadre>("https://www.balldontlie.io/api/v1/teams")
    this.obs.subscribe(this.dosomething)

  }

  dosomething = (data: Squadre) => {
    this.data = data;
    console.log(this.data)
  }
}
