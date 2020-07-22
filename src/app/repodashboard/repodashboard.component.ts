import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GithubService } from '../shared/github.service';

@Component({
  selector: 'app-repodashboard',
  templateUrl: './repodashboard.component.html',
  styleUrls: ['./repodashboard.component.css']
})
export class RepodashboardComponent implements OnInit {

  parametername: string;
  parameterrepo: string;
  userCommit: any =[];
  repos: any = [];
  isLoading: boolean = false;
  isError: boolean = false;
  constructor(private route: ActivatedRoute, 
              private github: GithubService,
              private routes: Router) { }

  ngOnInit(): void {
    this.parametername = this.route.snapshot.params['name'];
    this.parameterrepo = this.route.snapshot.params['repo'];

    this.github.getCommits(this.parametername, this.parameterrepo).subscribe(commit => {
      this.userCommit = commit;
      this.isLoading = true;
    },error => {
      this.isError = true;
      this.routes.navigate(['/not-found']);
    })

    this.github.getRepos(this.parametername).subscribe((repos) => {
      this.repos = repos.filter(element => {
        return element.name == this.parameterrepo;
      })
      this.isLoading = true;
    })
  }
}
