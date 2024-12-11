import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyTeamsComponent } from './teams/my-teams/my-teams.component';
import { TeamsDetailsComponent } from './teams/teams-details/teams-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'my-teams', 
    children: [
      { path: '', pathMatch: 'full', component: MyTeamsComponent },
      { path: ':teamId', component: TeamsDetailsComponent},
    ],
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/404'},
  { path: '404', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
