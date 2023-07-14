import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewgroupComponent } from './viewgroup/viewgroup.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  {
    path: '',
    component: ViewgroupComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
