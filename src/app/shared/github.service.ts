import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    username: string;

    constructor(private _http: HttpClient) { }

    getUsers(): Observable<User> {
        return this._http.get('https://api.github.com/users');
    }

    getUser(username: string): Observable<User> {
        return this._http.get('https://api.github.com/users/' + username);
    }

    getRepos(username: string): Observable<any> {
        return this._http.get('https://api.github.com/users/' + username + '/repos');
    }
    // getRepository(q: string): Observable<any> {
    //     let endPoint = 'https://api.github.com/search/repositories?q=' + q;
    //     return this._http.get(endPoint);
    // }

    getCommits(username: string, repo: string) {
        let endPoint = 'https://api.github.com/repos/' + username + '/' + repo + '/commits'
        return this._http.get(endPoint);
    }

    updateProfile(username: string) {
        this.username = username;
    }
}
