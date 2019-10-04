import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


import base from '../../services/api.service'
 
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  users;
  imageurl:String;
  constructor(private routes:Router,private manageuser:ApiService) { }
   
  ngOnInit() {
    this.imageurl=base
    this.manageuser.manageUser().subscribe(resp=>{
      console.log(resp)
      this.users=resp['data']
      console.log(this.users);
  }
    )
}
editUsers(id: any){
  console.log(id);
  this.routes.navigate(['/editmanageuser',id])
}
}
