import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient:HttpClient) { }
  BACKEND = "http://localhost:8080"

  public listAllUsers(){
    return this.httpclient.get(this.BACKEND + '/getUsers');
  }
  public deleteUser(userId:any){
    return this.httpclient.delete(this.BACKEND+'/deleteUser?userId='+userId)
  }
  public getUserById(userId:any){
    return this.httpclient.get(this.BACKEND+'/getUser?userId='+userId)
  }
  public updateUser(userDetails: any, userId: any){
    return this.httpclient.put(this.BACKEND+'/updateUser?userId='+userId, userDetails)
  }
  public addUser(userDetails: any){
    return this.httpclient.post(this.BACKEND+'/addUser', userDetails)
  }
}
