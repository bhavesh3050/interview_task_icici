import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminworkComponent } from './adminwork/adminwork.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
 {path: 'adminwork/:id',component: AdminworkComponent},
 {path: 'adminwork',component: AdminworkComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
