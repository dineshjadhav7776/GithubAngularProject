import { Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/github.service';
import { User } from '../models/user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: User;
  repos: any = [];
  selectedUser: any = [];
  isSelected: boolean = false;
  isLoading: boolean = false;
  userName: string;

  constructor(private gitService: GithubService) { }
  ngOnInit() {
    this.gitService.getUsers().subscribe((res: User) => {
      this.users = res;
      this.isLoading = true;
    })
  }

  findProfile(event) {
    if(this.userName == '') {
      this.isSelected = false;
    }
    this.gitService.getUser(this.userName).subscribe((user: User) => {
      this.selectedUser = user;
      this.isSelected = true;
      this.isLoading = true;
    })
    this.gitService.getRepos(this.userName).subscribe(repos => {
      this.repos = repos;
      this.isSelected = true;
      this.isLoading = true;
    })
  }

}
