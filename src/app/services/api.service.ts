import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Manageusers } from '../models/manageusers';

 let base="";
export default base ="http://192.168.1.11:8081"


@Injectable({
  providedIn: 'root'
})
export class ApiService {
   baseurl="http://192.168.1.11:8081/"  //api/admin/login";
  constructor(private http:HttpClient){
  }

  loginUser(data){
   return this.http.post(this.baseurl+'api/admin/login',data);
  }

  getManageUser(page:any){
    return this.http.post(this.baseurl+"api/admin/displayUsers",page);
  }

  getParticularManageUser(id: any){
    return this.http.get(`${this.baseurl}api/admin/displayParticularUser/${id}`);
  }

  getParticularBooking(id:any){
    return this.http.get(`${this.baseurl}api/admin/displayParticularBooking/${id}`);
  }

  getallusersByemail(data: any){
    return this.http.post(`${this.baseurl}api/admin/searchUsers`,data);
  }

  getallserviceByemail(data: any){
    return this.http.post(`${this.baseurl}api/admin/searchServices`,data);
  }


  updateManageUser(data: any){
    return this.http.put(`${this.baseurl}api/admin/editUser`,data);
  }


  getallManageServiceProvider(page: any){
    return this.http.post(this.baseurl+"api/admin/displayServices",page);
  }


  registerUser(body:any){
   return this.http.post(this.baseurl+"api/admin/registerUser",body);
  }


   getParticularManageServiceProvider(id:any){
     return this.http.get(`${this.baseurl}api/admin/displayServices/${id}`);
   }


   updateManageServiceProvider(data: any){
     return this.http.put(`${this.baseurl}api/admin/editService`,data);
   }

   getallBookingManagement(data: any){
     return this.http.post(`${this.baseurl}api/admin/displayBookings`,data);
   }

   createBooking(data:any){
    return this.http.post(`${this.baseurl}api/user/createBooking`,data);
   }
  }


