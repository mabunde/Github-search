import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Repository } from './repository';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  user: User;
  repository: Repository;
  repos = [];



constructor(private http: HttpClient, private router: Router) {
    this.user = new User("", "", "", 0, 0, 0, new Date(), "", "",new Date());
    this.repository = new Repository("", "", 0,"", new Date());
    this.router = router;
 }

getData(username: string){
  interface ApiResponseUser{
     login: string,
     avatar_url: any,
     name:string,
     followers: number,
     following: number,
     public_repos: number,
     created_at:Date,
     bio:string,
     html_url:string,
     updated_at:Date
  }
  interface ApiResponseRepository{
     name:string,
     description:string,
     forks_count:number,
     html_url:string,
     created_at:Date
  }
  var promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponseUser>('https://api.github.com/users/' + username).toPromise().then(response =>{
          this.user.login = response.login;
          this.user.avatar_url = response.avatar_url;
          this.user.name = response.name;
          this.user.followers = response.followers;
          this.user.following = response.following;
          this.user.public_repos = response.public_repos;
          this.user.created_at = response.created_at;
          this.user.bio = response.bio;
          this.user.html_url = response.html_url;
          this.user.updated_at = response.updated_at;

          resolve(response);
      }, error => {
          let status = error.status;
          if (status == 404){
              this.router.navigate(['../404']);    
          }
          reject(error);
      })
      
      this.http.get<ApiResponseRepository[]>('https://api.github.com/users/' + username + '/repos').toPromise().then(response =>{
          for (let i=0; i < response.length; i++){
              this.repository.name = response[i].name;
              this.repository.description = response[i].description;
              this.repository.forks_count = response[i].forks_count;
              this.repository.html_url = response[i].html_url;
              this.repository.created_at=response[i].created_at;

              this.repository = new Repository(this.repository.name, this.repository.description,this.repository.forks_count, this.repository.html_url, this.repository.created_at);
              this.repos.push(this.repository);
          }

          resolve(response);
      }, error => {
          let status = error.status;
          if (status == 404){
              this.router.navigate(['../404']);    
          }
          reject(error);
      });
      return promise;
  });
}
}
