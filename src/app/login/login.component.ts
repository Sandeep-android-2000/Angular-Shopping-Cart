import { NgClass, NgIf } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  isLoginForm:boolean = true;
  fname : string = '';
  lname: string = '';
  password: string = '';

  private authService = inject(AuthService)
  private router = inject(Router)

  switchToLogin() {
    this.isLoginForm = true;
  }

  switchToSignup() {
    this.isLoginForm = false;
  }

  onLogin() {
  
   this.authService.login(this.fname,this.lname);
   this.fname = ''
   this.lname = ''
   this.email = ''
   this.password = ''
   this.router.navigate([''])
  }

  onSignup() {
    this.authService.login(this.fname,this.lname);
    this.email='';
    this.fname=''
    this.lname=''
    this.password = ''
    this.router.navigate([''])
  }



}
