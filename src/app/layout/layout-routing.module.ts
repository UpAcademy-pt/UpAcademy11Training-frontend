import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DaySessionsViewComponent } from './day-sessions-view/day-sessions-view.component';
import { AdminManageSessionsViewComponent } from './admin-manage-sessions-view/admin-manage-sessions-view.component';
import { HistoryComponent } from './history-view/history.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { UserPageViewComponent } from './user-page-view/user-page-view.component';
import { UserToolsViewComponent } from './user-tools-view/user-tools-view.component';
import { AdminManageUsersViewComponent } from './admin-manage-users-view/admin-manage-users-view.component';
import { AllSessionsViewComponent } from './all-sessions-view/all-sessions-view.component';


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
        path: 'day-sessions-view',
        component: DaySessionsViewComponent
      },
      {
        path: 'all-sessions-view',
        component: AllSessionsViewComponent
      },
      {
        path: 'history-view',
        component: HistoryComponent
      },
      {
        path: 'questions-view',
        component: QuestionsViewComponent
      },
      {
        path: 'user-page-view',
        component: UserPageViewComponent
      },
      {
        path: 'user-tools-view',
        component: UserToolsViewComponent
      },
      {
        path: 'admin-manage-users-view',
        component: AdminManageUsersViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
