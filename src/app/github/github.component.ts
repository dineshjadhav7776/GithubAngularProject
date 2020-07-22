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
  username : string;
  selectedUser: any = [];
  isSelected: boolean = false;
  isLoading: boolean = false;
  userName: string;

  constructor(private gitService: GithubService) { }
  ngOnInit() {
    this.gitService.getUsers().subscribe((res: User) => {
      this.users = res;
      this.isLoading = true;
      console.log(this.users);
    })
  }

  findProfile(event) {
    if(this.username == '') {
      this.isSelected = false;
    }
    this.gitService.getUser(this.username).subscribe((user: User) => {
      this.selectedUser = user;
      this.isSelected = true;
      this.isLoading = true;
    })
    this.gitService.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
      this.isSelected = true;
      this.isLoading = true;
    })
  }

}
