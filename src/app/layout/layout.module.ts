import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { UserToolsViewComponent } from './user-tools-view/user-tools-view.component';
import { AdminCreateSessionViewComponent } from './admin-create-session-view/admin-create-session-view.component';
import { AdminManageSessionsViewComponent } from './admin-manage-sessions-view/admin-manage-sessions-view.component';
import { UserPageViewComponent } from './user-page-view/user-page-view.component';
import { DaySessionsViewComponent } from './day-sessions-view/day-sessions-view.component';
import { HistoryComponent } from './history-view/history.component';
import { SharedModule } from '../shared-components/shared.module';
import { AdminManageUsersViewComponent } from './admin-manage-users-view/admin-manage-users-view.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DaySessionsViewComponent,
    HistoryComponent,
    QuestionsViewComponent,
    UserToolsViewComponent,
    AdminCreateSessionViewComponent ,
    AdminManageSessionsViewComponent,
    UserPageViewComponent,
    AdminManageUsersViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
