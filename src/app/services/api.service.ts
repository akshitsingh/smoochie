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
  manageUser(){
    return this.http.get(this.baseurl+"api/admin/displayUsers");
  }
  getManageUser(id: any){
    return this.http.get(`${this.baseurl}api/admin/displayParticularUser/${id}`)
  }
  updateManageUser(data: any){
    return this.http.put(`${this.baseurl}api/admin/editUser`,data);
  }
  manageServiceProvider(){
    return this.http.get(this.baseurl+"api/admin/displayServices");
  }
  registerUser(body:any){
   return this.http.post(this.baseurl+"api/admin/registerUser",body);
  }
   getManageServiceProvider(id:any){
     return this.http.get(`${this.baseurl}api/admin/displayServices/${id}`);
   }
   updateManageServiceProvider(data: any){
     return this.http.put(`${this.baseurl}api/admin/editService`,data);
   }
   getBookingManagement(data: any){
     return this.http.post(`${this.baseurl}api/admin/displayBookings`,data);
   }
  }


