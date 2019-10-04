import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';

import base from '../../services/api.service';

@Component({
  selector: 'app-bookingmanagement',
  templateUrl: './bookingmanagement.component.html',
  styleUrls: ['./bookingmanagement.component.css']
})
export class BookingmanagementComponent  {
  imageurl;
  users;
  const mydate: any;

  constructor(private route:Router, private api:ApiService,private dateapi:DatePipe) { }
  
   
  ngOnInit() {
    this.imageurl=base;
    this.api.getBookingManagement(this.users).subscribe(resp=>{
      this.users=resp['data'];
      console.log(this.users);
      this.dateapi = new DatePipe('en-US');
     this.mydate=this.dateapi.transform('')
    })
  }

}
