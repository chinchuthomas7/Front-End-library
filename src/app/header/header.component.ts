import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:String="Welcome to Library App!"

  constructor(public _auth:AuthService,private router:Router) { }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/books'])
  }

  loggedUser()
{
  this.router.navigate(['/addbook'])
   
  
}

  ngOnInit(): void {
  }

}
