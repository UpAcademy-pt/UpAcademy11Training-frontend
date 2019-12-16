import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  private activeRoute;
  private progressBar = false;
  private dropDownButton = false;
  private userFace = false;
/*   *ngIf="this.userFace" class="icon">account_circle</mat-icon>
      <mat-progress-bar *ngIf="this.progressBar" class="bar" mode="determinate" value="40">
      </mat-progress-bar>
      <span class="example-fill-remaining-space"></span>
        <button mat-icon-button>
        <mat-icon *ngIf="this.dropDownButton" (click)="sidenav.toggle()">menu</mat-icon> */
  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd)=> {
      this.activeRoute = event.urlAfterRedirects;
      console.log("Atum : " + this.activeRoute);
      if (this.activeRoute != "/login") {
        this.progressBar = true;
        this.dropDownButton = true;
        this.userFace = true;
      }
    })
  }

  ngOnInit() {}

}
