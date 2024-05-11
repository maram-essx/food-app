import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
message:string='';
forgetForm:FormGroup=new FormGroup({
  email:new FormControl(null)
})
constructor(private _AuthService:AuthService ,private _Router:Router){

}
onForget(){
  this._AuthService.forget(this.forgetForm.value).subscribe({
    next:(res:any)=>{
      this.message=res.message;
      this._Router.navigate(['/reset'])
    }
  })
}
}
