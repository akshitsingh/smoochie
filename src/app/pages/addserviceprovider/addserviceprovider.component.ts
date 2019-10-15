import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addserviceprovider',
  templateUrl: './addserviceprovider.component.html',
  styleUrls: ['./addserviceprovider.component.css']
})
export class AddserviceproviderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goTomanageserviceprovider(){
    this.router.navigate(['/manageserviceprovider']);
    }
}
