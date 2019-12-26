import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-view/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatIconModule, MatListModule, MatProgressBarModule, MatSidenavModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { SharedModule } from './shared-components/shared.module';
import { HeaderModule } from './shared-components/components/header/header.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [ 
    MbscModule, 
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HeaderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    MatProgressBarModule,
    MatCardModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}