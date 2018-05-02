import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
constructor() { }

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }

  personalInformation=[
    
  ]

}

interface address{
  address1:String,
  address2:String,
  street:String;
  city:String;
  pincode:Number;

}
