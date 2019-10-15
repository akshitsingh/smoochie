import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormsModule } from '@angular/forms';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
   
   admin:any={
   email:'',
   password:''
   }
  constructor(private router:Router,private service:ApiService) { }

  ngOnInit() {
         
  }

  login(){
    let form = {
      email:this.admin.email,
      password:this.admin.password
    }  
    this.service.loginUser(form)
    .subscribe((res:any) =>{
      console.log(res)
    if(res.success){
        this.router.navigate(['/dashboard']);
    }
  });
  }
  goToforgetpassword(){
    this.router.navigate(['/forgetpassword']);
  }
  goTodashboard(){
    this.router.navigate(['/dashboard']);
  }

}
