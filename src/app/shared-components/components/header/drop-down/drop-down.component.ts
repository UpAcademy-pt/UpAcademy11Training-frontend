import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  public static progressbar = false;
  public static dropDownButton = false;
  public static userFace = false;
/*   *ngIf="this.userFace" class="icon">account_circle</mat-icon>
      <mat-progress-bar *ngIf="this.progressBar" class="bar" mode="determinate" value="40">
      </mat-progress-bar>
      <span class="example-fill-remaining-space"></span>
        <button mat-icon-button>
        <mat-icon *ngIf="this.dropDownButton" (click)="sidenav.toggle()">menu</mat-icon> */
  constructor() { }

  ngOnInit() {
  }

}
