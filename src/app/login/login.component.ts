import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string="Login "

 

  user={
    username:'',
    password:''
  };
  


  constructor(public _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){

    this._auth.loginUser(this.user)

    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/books'])
      }
    )


  }

}
