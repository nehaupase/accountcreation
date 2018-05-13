import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{Address} from '../Address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   resAddress = new Address();
  corrAddress = new Address();
  loopVal:number;
constructor(private router: Router) { 
  
}

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }

  onFormSubmit(userForm : NgForm, resAddress : Address, corrAddress: Address){
       console.log(userForm.value);
       console.log(userForm.controls['firstName'].value);
       console.log(resAddress.address1);
       console.log(corrAddress.address1);
  }  

  cancelEdit(){
    this.router.navigate(['login']);

  }

  
}
