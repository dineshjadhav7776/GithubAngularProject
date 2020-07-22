import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { ProfileComponent } from './profile/profile.component';
import { RepodashboardComponent } from './repodashboard/repodashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: GithubComponent },
  { path: 'github', component: GithubComponent },
  { path: 'github/:name', component: ProfileComponent },
  { path: 'github/:name/:repo', component: RepodashboardComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
