import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>("http://localhost:3000/users");
  }

  deleteuser(id: number): Observable<Users> {
    return this.httpClient.delete<Users>("http://localhost:3000/users/" + id);
  }

  getUserById(id: number): Observable<Users> {
    return this.httpClient.get<Users>("http://localhost:3000/users/" + id);
  }

  updateUserInfo(user: Users): Observable<Users> {
    return this.httpClient.put<Users>("http://localhost:3000/users/" + user.id, user);
  }

  addUser(user: Users): Observable<Users> {
    return this.httpClient.post<Users>("http://localhost:3000/users/", user);
  }
}

/*
export class UsersService {

  constructor(private httpclient: HttpClient) { }

  getallusers(): Observable<Users[]> {
    return this.httpclient.get<Users[]>(environment.hostbackend + "/getallusers")
  }
  deleteusers(id: number): Observable<Users> {
    return this.httpclient.delete<Users>(environment.hostbackend + "/deleteuser/" + id);

  }
  getuserbyid(id: number): Observable<Users> {
    return this.httpclient.get<Users>(environment.hostbackend + "/getuserbyid/" + id);
  }
  updateUserInfo(user: Users): Observable<Users> {
    return this.httpclient.put<Users>(environment.hostbackend + "/updateuser/" + user.iduser, user);
  }
  addUser(user: Users): Observable<Users> {
    return this.httpclient.post<Users>(environment.hostbackend + "/adduser/", user);
  }
  // ////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////
  connect(email: string, password: string): Observable<ResponseAuth> {
    return this.httpclient.post<ResponseAuth>(environment.host + "/LogIn", { email: email, password: password })
  }
  saveuser(accessToken:String,user:Users){
    // localStorage.setItem("jwt",accessToken);
  }
  addClient(client: Client): Observable<Client> {
    return this.httpclient.post<Client>(environment.host + "/Client", client)
  }
  /////////////////
  addImageToUser(iduser: number, file: File): Observable<Users> {
    return this.httpclient.post<Users>(environment.hostbackend + "/addimagetouser/" + iduser, file);
  }
  getImageUser(iduser: number): Observable<File> {
    return this.httpclient.get<File>(environment.hostbackend + "/getimageuser/" + iduser);
  }
}
*/
