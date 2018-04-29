import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthenticationService {

  constructor() { 
    this.isAuthenticated=false;
  }

  isAuthenticated:boolean;

  setAuthenticated(auth){
    this.isAuthenticated = auth;
  }

  getAuthenticated():boolean{
   return this.isAuthenticated;
  }


}
