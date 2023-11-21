import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PlayersListComponent } from './players-list/players-list.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "team/:id", component: PlayersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
