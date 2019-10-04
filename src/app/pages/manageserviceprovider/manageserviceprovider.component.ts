import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Router ,ActivatedRoute, Params} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

 
 

import base from '../../services/api.service'
@Component({
  selector: 'app-manageserviceprovider',
  templateUrl: './manageserviceprovider.component.html',
  styleUrls: ['./manageserviceprovider.component.css']
})
export class ManageserviceproviderComponent implements OnInit {
  public id: string;
  users;
  isCheacked;
  imageurl:String;
  constructor(private router:Router,private activatedRoute:ActivatedRoute ,private manageservice:ApiService) { }
  goToaddserviceprovider(){
    this.router.navigate(['/addserviceprovider']);
    }
  ngOnInit() {
      this.imageurl=base;
      this.manageservice.manageServiceProvider().subscribe(resp=>{
      console.log(resp)
      this.users=resp['data']
      console.log(this.users);      
  }
    )
   
  } 
  editServiceUsers(id: any){
    console.log("userid",id);
   this.router.navigate(['/editserviceusers',id])
}

}
 
