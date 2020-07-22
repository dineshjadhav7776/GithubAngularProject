import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GithubService } from '../shared/github.service';

@Component({
  selector: 'app-repodashboard',
  templateUrl: './repodashboard.component.html',
  styleUrls: ['./repodashboard.component.css']
})
export class RepodashboardComponent implements OnInit {

  parametername;
  parameterrepo;
  commit;
  repos;
  isLoading = false;
  constructor(private route: ActivatedRoute, private github: GithubService) { }

  ngOnInit(): void {
    this.parametername = this.route.snapshot.params['name'];
    this.parameterrepo = this.route.snapshot.params['repo'];

    this.github.getCommits(this.parametername, this.parameterrepo).subscribe(commit => {
      this.commit = commit;
      this.isLoading = true;
    })

    this.github.getRepos(this.parametername).subscribe((repos) => {
      this.repos = repos.filter(element => {
        return element.name == this.parameterrepo;
      })
      this.isLoading = true;
    })
  }
}
