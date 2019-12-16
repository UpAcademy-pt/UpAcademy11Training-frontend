import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-view/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared-components/components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './shared-components/components/header/header.module';
import { RegisterModalComponent } from './shared-components/components/header/register-modal/register-modal.component';
import { UserProgressComponent } from './shared-components/components/header/user-progress/user-progress.component';
import { DropDownComponent } from './shared-components/components/header/drop-down/drop-down.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    RegisterModalComponent,
    UserProgressComponent,
    DropDownComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
/*     NgbModalModule */
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


