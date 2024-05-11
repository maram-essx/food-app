export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister{
  userName:string;
  email:string;
  country:string;
  phoneNumber:string;
  profileImage:string;
  password:string;
  confirmPassword:string;

}
export interface IForget{
  email:string;
  

}
export interface IVerify{
  email:string;
  code:string

}
export interface IReset{
  email:string;
  seed:string;
  password:string;
  confirmpassword:string;
}