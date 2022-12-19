import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

    {path:'front',component:EmployeeComponent,
     children:[
        {path:'home',component :HomeComponent,}
     ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class FrontRoutingModule { }
