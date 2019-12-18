import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './components/sessions/sessions.component';
import { MatButtonModule, MatIconModule, MatListModule, MatProgressBarModule, MatSidenavModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
     SessionsComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      MatProgressBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatExpansionModule,
      MatIconModule,
      MatCardModule
    ],
    exports: [
      SessionsComponent,
      FormsModule,
      MatProgressBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatExpansionModule,
      MatIconModule,
      MatCardModule
    ]
  })

  export class SharedModule { }