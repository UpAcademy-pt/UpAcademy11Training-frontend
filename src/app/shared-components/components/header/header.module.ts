import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { UserProgressComponent } from './user-progress/user-progress.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [ 
      HeaderComponent,
      UserProgressComponent,
      DropDownComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      NgbModule,
      MatProgressBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
    ],
    exports: [
      HeaderComponent
    ]
  })
  export class HeaderModule { }
  