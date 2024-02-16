import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginFormGroup!:FormGroup;
  submitted:boolean=false;
  errorMessage!:string;
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.loginFormGroup=this.fb.group({
      username:["",[Validators.required]],
      password: ["", Validators.required],
    })
  }
  onLogin(){
//if(this.loginFormGroup.invalid)return;
    this.authService.login(this.loginFormGroup.value).subscribe({
      next:loginResponse=>{
        this.authService.saveToken(loginResponse);
        console.log(loginResponse);
      },
      error:err=>{
        console.log(err);
        this.errorMessage="An error : "+err.message;
      }
    })

}}
