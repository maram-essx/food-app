import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CodeComponent } from '../code/code.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService: AuthService , private _Router:Router, private dialogRef:MatDialog
  ) {}

  openDialog(){
    this.dialogRef.open(CodeComponent)
  }
  ngOnInit() {}
  isLoading: boolean = false;
  imgSrc:any;
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null),
    email: new FormControl(null),
    country: new FormControl(null),
    phoneNumber: new FormControl(null),
    profileImage: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null),
  });

  handelRegister(registerForm: FormGroup) {
   console.log(registerForm.value);
this.isLoading = true;
let myData=new FormData()
myData.append('userName',registerForm.value.userName);
myData.append('email',registerForm.value.email);
myData.append('country',registerForm.value.country);
myData.append('phoneNumber',registerForm.value.phoneNumber);
myData.append('profileImage',this.imgSrc);
myData.append('password',registerForm.value.password);
myData.append('confirmPassword',registerForm.value.confirmPassword);

console.log(myData);

    if (myData) {
      this._AuthService.register(myData).subscribe({
        next: (response) => {
          this.isLoading = false;
          localStorage.setItem('userMail',registerForm.value.email)
          console.log(response);
          this.openDialog()
        },
        error: (err) => {
          // console.log(registerForm.value.email);

          this.isLoading = false;

          console.log(err);
        },
      });
    }
  }
// in app.component.ts
files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
  console.log(this.files);
  this.imgSrc=this.files;
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


}
