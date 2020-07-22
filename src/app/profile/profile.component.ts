import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { GithubService } from '../shared/github.service';
import { User } from '../models/user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ActiveUser: string;
  selectedUser: any = [];
  isLoading: boolean = false;
  repos : any =[];
  isError: boolean = false;
  constructor(private route: ActivatedRoute, 
              private gitService: GithubService,
              private routes: Router) { }

  ngOnInit(): void {
    this.ActiveUser = this.route.snapshot.params['name'];
    this.gitService.getUser(this.ActiveUser).subscribe((user: User) => {
      this.selectedUser = user;
      this.isLoading = true;
    }, error => {
      this.isError =true;
      this.routes.navigate(['/not-found']);
    })
    this.gitService.getRepos(this.ActiveUser).subscribe((repos) => {
      this.repos = repos;
    })
  }
}
