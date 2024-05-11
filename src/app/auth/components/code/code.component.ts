import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
verifycode:FormGroup=new FormGroup({
  email:new FormControl(null),
  code:new FormControl(null)

})
constructor(private dialogRef:MatDialog , private _AuthService:AuthService,private _Router:Router){

}
onVerify(){
  this._AuthService.verify(this.verifycode.value).subscribe({
next:(res:any)=>{
  this._Router.navigate(['/auth'])
}
  })
}
}
