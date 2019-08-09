import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username : String;
  password :String;
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  LoginUser(){

    if(this.username =="shubham" && this.password == "12345")
    {
      this.router.navigate(['bookmyshow']);
    }
  }

}
