import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm, NgModel } from '@angular/forms';
import apiService, { ApiService } from 'src/app/services/api.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  users:any;
  constructor(private api:ApiService) { }
   
  ngOnInit() {
  }
  onSubmit(form:NgForm){ 
    console.log(form.value);
    
  this.api.registerUser(form.value).subscribe((res:any)=>{
      //  this.users=res
       console.log("res",res);  
  })
  console.log("data submitted : " + form.value);
  }
   
 }
  
  

