import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../models/LoginRequest";
import {BehaviorSubject, Observable, publish} from "rxjs";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoggedUser} from "../models/loggeg-user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  jwtHelperService = new JwtHelperService()
user = new BehaviorSubject<LoggedUser | null>(null);
  constructor(private httpClient: HttpClient, private router:Router) {
  }

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    let formData = new FormData();
    formData.append("username", loginRequest.username);
    formData.append("password", loginRequest.password);

    return this.httpClient.post<LoginResponse>(`${this.baseUrl}login`, formData)

  }
  public saveToken(jwtTokens:LoginResponse){
    const decodedAccessToken= this.jwtHelperService.decodeToken(jwtTokens.accessToken);
    const loggedUser = new LoggedUser(decodedAccessToken.sub,decodedAccessToken.roles,jwtTokens.accessToken,this.getExpiration(decodedAccessToken.exp))
    this.user.next(loggedUser);
    console.log(decodedAccessToken);
    console.log(loggedUser);
    this.redirectLoggedInUse(decodedAccessToken,jwtTokens.accessToken)
  }
  redirectLoggedInUse(decodedToken: any, accessToken: string){
    if(decodedToken.roles.includes("TECHNICIEN")) this.router.navigateByUrl("/");
    else if(decodedToken.roles.includes("RESPONSABLE")){

    }
  }
  getExpiration(exp:number){
    const date = new Date(0);
    date.setUTCSeconds(exp);
    return date;
  }
}
