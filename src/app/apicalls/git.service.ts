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
      }, error => {
        this.user.avatar = ''
        this.user.userName = ''
        this.user.location = ''
        this.user.fullName = ''
        this.user.bio = ''
        this.user.repos = 0
        this.user.joined = new Date()

        reject(error)
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
      this.http.get<RepoApiResponse>(`${environment.gitUrl}${searchName}${environment.repoAccess}`).toPromise().then(response => {
        this.repo.name = response.name
        this.repo.description = response.description
        this.repo.updated = response.updated_at
        this.repo.link = response.html_url

        resolve()
      }, error => {
        this.repo.name = ''
        this.repo.description = ''
        this.repo.updated = new Date()
        this.repo.link = ''
      })
    })
  }


}
