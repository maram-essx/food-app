import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
const _Router=inject(Router);
const _AuthService=inject(AuthService);

// const role=_AuthService.role;
// console.log(role);
  if(localStorage.getItem('userToken')!==null){
    return true;
  }else{
    _Router.navigate(['/auth/login']);
      return false;

  }
};
