import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

msg:any=''
resetCode:FormGroup=new FormGroup({
  email:new FormControl(null),
  seed:new FormControl(null),

  password:new FormControl(null),

  confirmPassword:new FormControl(null),

})



constructor(private _AuthService:AuthService){
  
}
onReset(data:FormGroup){
this._AuthService.reset(data.value).subscribe({
  next:(res:any)=>{
    this.msg=res.message;
  }
})


}
}
