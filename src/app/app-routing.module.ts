import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-view/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminCreateSessionViewComponent } from './layout/admin-create-session-view/admin-create-session-view.component';
import { AdminManageSessionsViewComponent } from './layout/admin-manage-sessions-view/admin-manage-sessions-view.component';
import { DaySessionsViewComponent } from './layout/day-sessions-view/day-sessions-view.component';
import { HistoryComponent } from './layout/history-view/history.component';
import { QuestionsViewComponent } from './layout/questions-view/questions-view.component';
import { UserPageViewComponent } from './layout/user-page-view/user-page-view.component';
import { UserToolsViewComponent } from './layout/user-tools-view/user-tools-view.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
