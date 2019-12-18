import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DaySessionsViewComponent } from './day-sessions-view/day-sessions-view.component';
import { AdminManageSessionsViewComponent } from './admin-manage-sessions-view/admin-manage-sessions-view.component';
import { AdminCreateSessionViewComponent } from './admin-create-session-view/admin-create-session-view.component';
import { HistoryComponent } from './history-view/history.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { UserPageViewComponent } from './user-page-view/user-page-view.component';
import { UserToolsViewComponent } from './user-tools-view/user-tools-view.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin-manage-sessions-view',
        component: AdminManageSessionsViewComponent
      },
      {
        path: 'admin-create-session-view',
        component: AdminCreateSessionViewComponent
      },
      {
        path: 'day-sessions-view',
        component: DaySessionsViewComponent
      },
      {
        path:'history-view',
        component: HistoryComponent
      },
      {
        path:'questions-view',
        component: QuestionsViewComponent
      },
      {
        path: 'user-page-view',
        component: UserPageViewComponent
      },
      {
        path: 'user-tools-view',
        component: UserToolsViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
