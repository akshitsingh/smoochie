import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


import base from '../../services/api.service'
@Component({
  selector: 'app-avi',
  templateUrl: './avi.component.html',
  styleUrls: ['./avi.component.css']
})
export class AviComponent implements OnInit {
  
   
  constructor(private edituser:ApiService) { }

  ngOnInit() {
}
}
