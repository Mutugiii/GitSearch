import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient){
    this.user = new User ('','','','','',0,new Date())
  }

  user:User;
  repo:Repository;

  userRequest = (searchName) => {
    interface UserApiResponse{
      avatar_url: string,
      login: string,
      location: string,
      name: string,
      bio: string,
      public_repos: number,
      created_at: Date
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<UserApiResponse>(`${environment.gitUrl}${searchName}${environment.accessToken}`).toPromise().then(response=>{
        this.user.avatar = response.avatar_url
        this.user.userName = response.login
        this.user.location = response.location
        this.user.fullName = response.name
        this.user.bio = response.bio
        this.user.repos = response.public_repos
        this.user.joined = response.created_at

        
        resolve()
        return promise;
      }, error => {
        return null;
      })
    })
  }

  repoRequest = (searchName) => {
    interface RepoApiResponse{
      name: string
      description: string
      html_url: string
      updated_at: Date
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<RepoApiResponse>(`${environment.gitUrl}${searchName}${environment.repoAccess}${environment.accessToken}`).toPromise().then(response => {
        this.repo = response;

        resolve()
      }, error => {
        reject(error)
      })
    })
    return promise;
  }
}
