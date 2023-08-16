import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StaffEditComponent } from './pages/staff-edit/staff-edit.component';
import { DatatableComponent } from './pages/datatable/datatable.component';

const routes: Routes = [
  {
    path:"",
    component:MainLayoutComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"admin",component:AdminComponent},
      {path:"staff-add",component:StaffComponent},
      {path:"staff-edit/:staffId",component:StaffEditComponent},
      {path:"table",component:DatatableComponent}

    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
