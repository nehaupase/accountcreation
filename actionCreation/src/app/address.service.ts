import { Injectable } from '@angular/core';
import { Address } from './Address';


@Injectable()
export class AddressService {
  corrAddress: Address;
  resAddress: Address;
  firstName: String;
  lastName: String;
  email:String;

  constructor() { }

  getCorrAddress(){
    return this.corrAddress;
  }

  getResAddress(){
    return this.resAddress;
  }

  getFirstName(){
    return this.firstName;
  }

  getEmail(){
    return this.email;
  }

  setCorrAddress(corrAddress : Address){
    this.corrAddress = corrAddress;
  }

  setResAddress(resAddress : Address){
    this.resAddress = resAddress;
  }

  setFirstName(name:String){
    this.firstName = name;
  }

  setLastName(name:String){
    this.lastName = name;
  }



}
