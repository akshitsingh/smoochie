import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editbookingmanagement',
  templateUrl: './editbookingmanagement.component.html',
  styleUrls: ['./editbookingmanagement.component.css']
})
export class EditbookingmanagementComponent implements OnInit {

  users:any ={}

  constructor(private activatedRoute:ActivatedRoute ,private api:ApiService) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
    console.log("params",params);   
    this.api.getParticularBooking(params.id).subscribe((res:any)=>{
        this.users= res['data'];
      console.log("res",this.users);
    })
  });
}

  updateBooking(users:any){
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
