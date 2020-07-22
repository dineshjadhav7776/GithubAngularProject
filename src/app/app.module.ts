import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { ProfileComponent } from './profile/profile.component';
import { RepodashboardComponent } from './repodashboard/repodashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    ProfileComponent,
    RepodashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
