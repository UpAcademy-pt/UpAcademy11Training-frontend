import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-view/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared-components/components/header/header.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProgressComponent } from './shared-components/components/header/user-progress/user-progress.component';
import { DropDownComponent } from './shared-components/components/header/drop-down/drop-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatIconModule, MatListModule, MatProgressBarModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    UserProgressComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    MatProgressBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }