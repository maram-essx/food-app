import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService ,private _Router:Router) {}
    isLoading: boolean = false;
ngOnInit(): void {
    }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  handelLogin(loginForm: FormGroup) {
    this.isLoading = true;

    if (loginForm.valid) {
        this.isLoading = true;

      this._AuthService.login(loginForm.value).subscribe({

        next: (response) => {
          this.isLoading = false;

          console.log(response);
          //login ->get token from localStorage ->get role from token

      localStorage.setItem('userToken',response.token);

this._AuthService.getProfile();
        },
        error: (err) => {
          this.isLoading = false;

          console.log(err);
        },
        complete: () => {
          this._Router.navigate(['dashboard']);
        }
      });
    }
  }

}
