import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HeaderComponent } from './pages/header/header.component';
import { ManageuserComponent } from './pages/manageuser/manageuser.component';
import { ManageadminComponent } from './pages/manageadmin/manageadmin.component';
import { ManagepaymentComponent } from './pages/managepayment/managepayment.component';
import { ManageservicefeeComponent } from './pages/manageservicefee/manageservicefee.component';
import { ManageserviceproviderComponent } from './pages/manageserviceprovider/manageserviceprovider.component';
import { AddserviceproviderComponent } from './pages/addserviceprovider/addserviceprovider.component';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs'; 
import { HttpClient } from 'selenium-webdriver/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GooglePlaceModule } from "ngx-google-places-autocomplete"
import { RegisteruserComponent } from './pages/registeruser/registeruser.component';
import { EditserviceusersComponent } from './pages/editserviceusers/editserviceusers.component';
import { EditmanageusersComponent } from './pages/editmanageusers/editmanageusers.component';
import { BookingmanagementComponent } from './pages/bookingmanagement/bookingmanagement.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { EditbookingmanagementComponent } from './pages/editbookingmanagement/editbookingmanagement.component';
import { CreatebookingComponent } from './pages/createbooking/createbooking.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ManageuserComponent,
    ManageadminComponent,
    ManagepaymentComponent,
    ManageservicefeeComponent,
    ManageserviceproviderComponent,
    AddserviceproviderComponent,
    RegisteruserComponent,
    EditserviceusersComponent,
    EditmanageusersComponent,
    BookingmanagementComponent,
    EditbookingmanagementComponent,
    CreatebookingComponent,
    PaginationComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    NgxPaginationModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
