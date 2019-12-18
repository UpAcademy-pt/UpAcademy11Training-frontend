import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './components/sessions/sessions.component';
import { MatProgressBarModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
    declarations: [
     SessionsComponent
    ],
    imports: [
      CommonModule,
      MatProgressBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatExpansionModule,
      MatIconModule
    ],
    exports: [
      SessionsComponent,
    ]
  })

  export class SharedModule { }