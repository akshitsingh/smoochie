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
import { AviComponent } from './pages/avi/avi.component';
import { RegisteruserComponent } from './pages/registeruser/registeruser.component';
import { EditserviceusersComponent } from './pages/editserviceusers/editserviceusers.component';
import { EditmanageusersComponent } from './pages/editmanageusers/editmanageusers.component';
import { BookingmanagementComponent } from './pages/bookingmanagement/bookingmanagement.component';
 
 
 

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
    AviComponent,
    RegisteruserComponent,
    EditserviceusersComponent,
    EditmanageusersComponent,
    BookingmanagementComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
