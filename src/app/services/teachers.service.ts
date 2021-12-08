import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  url:string="http://localhost:3000/teachers"

  constructor(private http:HttpClient) { }

  getUser():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url);
  }

  postUser(user:IUser):Observable<IUser[]>{
    return this.http.post<IUser[]>(this.url,user);
  }

  putUser(user:IUser):Observable<IUser[]>{
    return this.http.put<IUser[]>(this.url+"/"+user.id,user);
  }

  deleteUser(user:IUser):Observable<IUser[]>{
    return this.http.delete<IUser[]>(this.url+"/"+user.id);
  }
}
