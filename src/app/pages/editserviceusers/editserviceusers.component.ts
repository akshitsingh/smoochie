import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import base from '../../services/api.service'

@Component({
  selector: 'app-editserviceusers',
  templateUrl: './editserviceusers.component.html',
  styleUrls: ['./editserviceusers.component.css']
})
export class EditserviceusersComponent implements OnInit {

  users:any ={}
                

  constructor(private router:Router,private activatedRoute:ActivatedRoute ,private api:ApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("params",params.id);   
      this.api. getParticularManageServiceProvider(params.id).subscribe((res:any)=>{
          this.users= res['data'];
// this.users.email = res.data.email
        console.log("res",this.users);
      })
    });
  }
  updateServiceUser(users: any){
    console.log(this.users);
   this.api.updateManageServiceProvider(users).subscribe(resp=>{
     console.log("updated",resp);
   })

  }

}
