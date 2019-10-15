import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
 
 
import base from '../../services/api.service'
 
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})

export class ManageuserComponent implements OnInit {
   imageurl;
   collection:any;
   currentPage:Number;
   config:any ={
     id:"foo"
   }

    constructor(private router:Router,private ActivatedRoute:ActivatedRoute,private manageuser:ApiService,) { 
      
    }
   
  ngOnInit() {
    this.imageurl=base
    this.ActivatedRoute.params.subscribe((params:Params) => {
      // console.log("currentpage",params)
      //   this.currentPage = params.id;   
    });  
    this.getUsers(1)
}

pageChange(newPage: number) {
  console.log("newPageee",newPage)
  this.getUsers(newPage)
  }

  getUsers(current){
    this.currentPage=current;
    this.manageuser.getManageUser({page:current}).subscribe((resp:any)=>{
      this.collection=resp['data']
      console.log("total",resp);
     console.log("collection",this.collection); 
     this.config={
       id:"foo",
       currentPage:this.currentPage,
       itemsPerPage:10,
       totalItems:resp.countResult
      }
});
  }

  editUsers(id:any){
    console.log("id",id)
    this.router.navigate(['editmanageuser',id] );
  }

   
}
