import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-pages/dashboard/dashboard.component';
import { EmployeeManagementTabComponent } from './admin-pages/employee-management-tab/employee-management-tab.component';
import { LeaveManagementTabComponent } from './admin-pages/leave-management-tab/leave-management-tab.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'login', component : LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'profile',component : ProfileComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',component:EmployeeManagementTabComponent},
  {path:'',component:LeaveManagementTabComponent},
  {path:'',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
