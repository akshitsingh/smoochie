import { Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Route } from '@angular/router';
import { log, format } from 'util';
import { ThrowStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'cluster';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {
 searchResultsofusers:any;
 searchResultsofservice:any;
 target:any;
 username;
 userid;
 serviceid;
 schedule;
 servicefirstname;
 servicelastname;
 finalname;
 origin:any={};
 location:any;
 showSearchResultsofusers:Boolean=true;
 showSearchResultsofservice:Boolean=true;
 noresults:Boolean=true;
 update;
 pickupAddress;
 
 google: any;

  constructor(private api:ApiService) { }

  ngOnInit() {
     
  }
  
 

/*api for search user*/
  searchUser(email: any){
     if(email.value.length> 2){
      console.log("value",email.value);
      this.api.getallusersByemail({email:email.value}).subscribe(res=>{
        console.log(res);
        this.showSearchResultsofusers=false
        if(res['data'].length>0){
          this.noresults=true;
          this.searchResultsofusers=res['data'];
          console.log("this.searchResults",this.searchResultsofusers);
        }
        else{
          this.searchResultsofusers=[]
          this.noresults=false;
        } 
    })  
  }
  else{
    this.searchResultsofusers=[]
    this.showSearchResultsofusers=true;
  }  
}


/**
 * 
 * api for search service
 */
    searchService(email: any){
      if(email.value.length> 2){
        console.log("value", email.value);
         this.api.getallserviceByemail({email:email.value}).subscribe(res=>{
          console.log(res)
          if(res['data'].length>0){
            this.showSearchResultsofservice=false
            this.noresults=true;
            this.searchResultsofservice=res['data']
          console.log("this.searchResultofservice",this.searchResultsofservice);
          }
          else{
            this.searchResultsofservice=[] 
            this.noresults=false;
          }    
    })
  }
  else{
    this.showSearchResultsofservice=true;
    this.searchResultsofservice=[];
  }
}

// select user
selectuser(nickName:any,id:any){
   this.username=nickName;
   this.userid=id;
   console.log("userid",this.userid)
   this.showSearchResultsofusers=true
}

//select service
selectService(firstName: any,lastName: any,id:any){
  console.log(firstName)
    this.servicefirstname=firstName; 
    this.servicelastname=lastName
    this.finalname=`${this.servicefirstname} ${this.servicelastname}`
    console.log(this.finalname);
    this.serviceid=id;
    console.log("service",this.serviceid)
   this.showSearchResultsofusers=true
}
hideSearch(e){
    this.showSearchResultsofusers=true;
    this.showSearchResultsofservice=true; 
}    


/**
 * 
 * schedule
 */

emitValue(event){
  console.log(event.value);
   var dateto=new Date(event.value);
     this.schedule=dateto.getTime();
   console.log(this.schedule);
}

 /**
 * 
 * submit form
 */
onSubmit(form:NgForm){
  console.log("form",form.value)
    form.value.userId = this.userid
    form.value.serviceId=this.serviceid
    form.value.location=this.location
    form.value.schedule=this.schedule
    console.log(form.value)
    this.api.createBooking(form.value).subscribe(res=>
      console.log("booking created",JSON.stringify(res))
      )
    }
  
//handle adress of maps
     public handleAddressChange(address:any) {
      this.origin={
        lat: address.geometry.location.lat(),
        lng: address.geometry.location.lng(),
        pickupAddress:address.formatted_address 
      }    
      this.location= [address.geometry.location.lng(),address.geometry.location.lat()]
    console.log(this.origin)

  }  
    
}

