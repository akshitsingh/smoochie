import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageuserComponent } from './pages/manageuser/manageuser.component';
import { ManageadminComponent } from './pages/manageadmin/manageadmin.component';
import { ManagepaymentComponent } from './pages/managepayment/managepayment.component';
import { ManageservicefeeComponent } from './pages/manageservicefee/manageservicefee.component';
import { ManageserviceproviderComponent } from './pages/manageserviceprovider/manageserviceprovider.component';
import { AddserviceproviderComponent } from './pages/addserviceprovider/addserviceprovider.component';
import { AuthGuard } from './auth.guard';
import { AviComponent } from './pages/avi/avi.component';
import { RegisteruserComponent } from './pages/registeruser/registeruser.component';
import { EditserviceusersComponent } from './pages/editserviceusers/editserviceusers.component';
import { EditmanageusersComponent } from './pages/editmanageusers/editmanageusers.component';
import { BookingmanagementComponent } from './pages/bookingmanagement/bookingmanagement.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:LoginComponent,
  },
  {
    path:'resetpassword',
    component:ResetpasswordComponent,
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'manageuser',
    component:ManageuserComponent,
  },
  {
    path:'editmanageuser/:id',
    component: EditmanageusersComponent
    },
  {
    path:'manageadmin',
    component:ManageadminComponent,
  },
  {
    path:'managepayment',
    component:ManagepaymentComponent,
  },
  {
    path:'manageservicefee',
    component:ManageservicefeeComponent,
  },
  {
    path:'manageserviceprovider',
    component:ManageserviceproviderComponent,
  },
  {
    path:'addserviceprovider',
    component:AddserviceproviderComponent,
  },
  {
    path:'avi',
    component: AviComponent
  },
  {
  path:'editserviceusers/:id',
  component: EditserviceusersComponent
  },
  {
    path:'registeruser',
    component:RegisteruserComponent
  },
  {
    path:'bookingmanagement',
    component:BookingmanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
