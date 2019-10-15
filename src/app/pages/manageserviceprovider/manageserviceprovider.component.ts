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
  isCheacked;
  imageurl:String;
  collection:any;
  currentPage:Number;
  config:any ={
    id:"foo"
  }

  constructor(private router:Router,private activatedRoute:ActivatedRoute ,private manageservice:ApiService) { }

  goToaddserviceprovider(){
    this.router.navigate(['/addserviceprovider']);
    }

  ngOnInit() {   
      this.imageurl=base;
      this.activatedRoute.params.subscribe((params:Params) => {
        console.log("currentpage",params)
          this.currentPage = params.id;   
      });  
      this.getmanageserviceprovider(1);
}

pageChange(newPage: number) {
  console.log("newPageee",newPage)
  this.getmanageserviceprovider(newPage)
  }

getmanageserviceprovider(current:number){
  this.currentPage=current;
  this.manageservice.getallManageServiceProvider({page:current}).subscribe((resp:any)=>{
    this.collection=resp['data']
    console.log("total",resp);
   console.log("collection",this.collection); 
   this.config={
     id:"foo",
     currentPage:this.currentPage,
     itemsPerPage:10,
     totalItems:resp.countResult
    }
    console.log({
     currentPage:this.config.currentPage,
     itemsPerPage:10,
     totalItems:resp.countResult
    })
});
}

  editServiceUsers(id: any){
    console.log("userid",id);
   this.router.navigate(['/editserviceusers',id])
}

}
 
