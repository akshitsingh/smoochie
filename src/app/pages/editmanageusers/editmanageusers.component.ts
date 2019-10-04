import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editmanageusers',
  templateUrl: './editmanageusers.component.html',
  styleUrls: ['./editmanageusers.component.css']
})
export class EditmanageusersComponent implements OnInit {

  users:any ={}
  

  constructor(private router:Router,private activatedRoute:ActivatedRoute ,private api:ApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("params",params.id);   
      this.api.getManageUser(params.id).subscribe((res:any)=>{
          this.users= res['data'];
// this.users.email = res.data.email
        console.log("res",this.users);
      })
    });
  }
  updateManageUser(users: any){
    console.log(this.users);
   this.api.updateManageUser(users).subscribe(resp =>{
     console.log("updated",resp);
    if(resp['success']){
          Swal.fire(
            'updated successfully'
          )
          }
           
   })
  }


}
