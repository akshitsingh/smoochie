import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goTodashboard(){
    this.router.navigate(['/dashboard']);
  }
    goTomanageuser(){
      this.router.navigate(['/manageuser']);
    }
    goTomanageadmin(){
      this.router.navigate(['/manageadmin']);
    }
    goTomanagepayment(){
      this.router.navigate(['/managepayment']);
    }
    goTomanageservicefee(){
      this.router.navigate(['/manageservicefee']);
    }
    goTomanageserviceprovider(){
      this.router.navigate(['/manageserviceprovider']); 
    }
    goTobookingmanagement(){
      this.router.navigate(['/bookingmanagement']);
    }
}
