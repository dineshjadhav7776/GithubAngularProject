import { Component, OnInit } from '@angular/core';
import { GithubService } from './shared/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coditation-task';

  constructor() { }
  ngOnInit() {
  }
}
