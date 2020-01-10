import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { UserToolsViewComponent } from './user-tools-view/user-tools-view.component';
import { AdminManageSessionsViewComponent } from './admin-manage-sessions-view/admin-manage-sessions-view.component';
import { DaySessionsViewComponent } from './day-sessions-view/day-sessions-view.component';
import { HistoryComponent } from './history-view/history.component';
import { SharedModule } from '../shared-components/shared.module';
import { AdminManageUsersViewComponent } from './admin-manage-users-view/admin-manage-users-view.component';
import { AllSessionsViewComponent } from './all-sessions-view/all-sessions-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LayoutComponent,
    DaySessionsViewComponent,
    HistoryComponent,
    QuestionsViewComponent,
    UserToolsViewComponent,
    AdminManageSessionsViewComponent,
    AdminManageUsersViewComponent,
    AllSessionsViewComponent
  ],
  imports: [
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    NgxDatatableModule
  ]
})
export class LayoutModule { }
