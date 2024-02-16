import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../models/login";
import {BehaviorSubject, Observable, publish} from "rxjs";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoggedUser} from "../models/loggedUSer";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  jwtHelperService = new JwtHelperService();
  tokenExpirationTimer:any;
user = new BehaviorSubject<LoggedUser | null>(null);
  constructor(private httpClient: HttpClient, private router:Router) {
  }

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    let formData = new FormData();
    formData.append("username", loginRequest.username);
    formData.append("password", loginRequest.password);

    return this.httpClient.post<LoginResponse>(`${this.baseUrl}login`, formData)

  }
  saveToken(jwtTokens:LoginResponse){
    const decodedAccessToken=this.jwtHelperService.decodeToken(jwtTokens.accessToken);
    const loggedUser = new LoggedUser(decodedAccessToken.sub,decodedAccessToken.roles,jwtTokens.accessToken,this.getExpirationDate(decodedAccessToken.exp));
    this.user.next(loggedUser);
    this.autologout(this.getExpirationDate(decodedAccessToken.exp).valueOf()-new Date().valueOf());
    localStorage.setItem("userData",JSON.stringify(loggedUser));

    this.redirectLoggedInUser(decodedAccessToken,jwtTokens.accessToken);
    console.log(loggedUser);
  }
  getExpirationDate(exp:number){
    const date=new Date(0);
    date.setUTCSeconds(exp);
    return date;
  }
  redirectLoggedInUser(decodedToken:any,accessToken:string){
    if(decodedToken.roles.includes("Responsable"))
      this.router.navigateByUrl("/");
    else if(decodedToken.roles.includes("Technicien"))
      this.router.navigateByUrl("/echantillon/all")
  }
  autoLogin(){
    const userDataString: string | null = localStorage.getItem('userData');

    // @ts-ignore
    if (userDataString !== null) {
      const userData: {
        username: string,
        roles: string[],
        _token: string,
        _expiration: Date
      } = JSON.parse(userDataString);
      if(!userData)return;
      const  loadedUser=new LoggedUser(userData.username,userData.roles,userData._token,new Date(userData._expiration));
      if(loadedUser.token){
        this.user.next(loadedUser);
        this.autologout(loadedUser._expiration.valueOf()- new Date().valueOf());
      }
      // Now you can use userData safely
    }

  }
  logout(){
    localStorage.clear();
    this.user.next(null);
    this.router.navigate(['/auth'])
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer=null;
  }
  autologout(expirationDuration:number){
    this.tokenExpirationTimer= setTimeout(()=>{
      this.logout();
    },expirationDuration)
  }
}
