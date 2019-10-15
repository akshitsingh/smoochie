import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
 

import base from '../../services/api.service';
import { NgForm } from '@angular/forms';
import { format } from 'util';

@Component({
  selector: 'app-bookingmanagement',
  templateUrl: './bookingmanagement.component.html',
  styleUrls: ['./bookingmanagement.component.css']
})
export class BookingmanagementComponent  {
  imageurl;
  users:any;
  statusValue=""
  startingdate;
  enddate;
  invaliddate:Boolean=true;

  constructor(private route:Router, private api:ApiService) { }
  
   
  ngOnInit() {
    this.imageurl=base;
   this.getBooking(undefined,{status:""})
  }
  getBooking(searchForm:NgForm,status){
    if(searchForm){
      let form =searchForm.value
      var dateto=new Date(form.bookingTo);
      var dateFrom=new Date(form.bookingFrom);
         this.startingdate=dateFrom.getTime();
         this.enddate=dateto.getTime();
          if(this.startingdate > this.enddate){
            this.invaliddate=false;
            console.log(this.invaliddate)
          }
          else{
            this.invaliddate=true;
          }
      searchForm.value.bookingFrom=dateFrom.getTime();
      searchForm.value.bookingTo =dateto.getTime();
        console.log(this.startingdate);
        console.log(this.enddate);
        console.log(searchForm);
    }
      let formData = status?status:searchForm.value
      console.log("formdata",formData);
      
     this.api.getallBookingManagement(formData).subscribe(resp=>{
      this.users=resp['data'];
      console.log("usersss",this.users);  
    })
  }

  editBookingmanagement(id:any){
      this.route.navigate(['editbookingmanagement',id])
  }
  }

