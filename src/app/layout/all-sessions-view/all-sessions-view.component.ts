import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-all-sessions-view',
  templateUrl: './all-sessions-view.component.html',
  styleUrls: ['./all-sessions-view.component.scss']
})

export class AllSessionsViewComponent implements OnInit {

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  todayDate = new Date();
  i = this.todayDate.getDay();
  dayName = this.days[this.i];
  displayWeek = [this.nextweek(-3), this.nextweek(-2), this.nextweek(-1), this.todayDate, this.nextweek(1), this.nextweek(2), this.nextweek(3)];
 /*  weeksDayNumber = [this.nextweek(-3).getDate(), this.nextweek(-2).getDate(), this.nextweek(-1).getDate(), this.todayDate.getDate(), this.nextweek(1).getDate(), this.nextweek(2).getDate(), this.nextweek(3).getDate()];
  weeksDayName = [this.days[this.i-3], this.days[this.i-2], this.days[this.i-1], this.dayName, this.days[this.i+1], this.days[this.i+2], this.days[this.i+3]]; */

  weekDays = [];
  activeDay = 0;
  index = this.weekDays.findIndex(day => { return day === this.activeDay });

  lp = $(".left-pointer");
  rp = $(".right-pointer");
  mItems = $(".menu-item");
  menu;
  sc;
  pos;
  links = $(".menu-item").children('a');

  constructor() { }

  ngOnInit() {
   
    console.log(this.displayWeek);
    
    
    this.links.on('click', () => {
      this.links.removeClass('active');
      $(this).addClass('active');
    });

    this.mItems.scroll(() => {
      if ($(this).scrollLeft() == 0) {
        $(".left-pointer").addClass("dis");
      } else {
        $(".left-pointer").removeClass("dis");
      }
    });

    let actualWeek = this.nextweek(0);
    console.log(actualWeek);
  }

  nextweek(inc) {
    let today = new Date();
    let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + inc);
    return nextweek;
  }

  returnDayNumber(date) {
    return date.getDate();
  }

  returnDayName(date) {
    return this.days[date.getDay()];
  }

  changeDay(day) {
    console.log(day);
    this.activeDay = day;
    this.index = this.weekDays.findIndex(day => { return day === this.activeDay });
  }

  goLeft() {
    this.sc = $(".menu-item").width() - 60;
    this.pos = $(".menu-item").scrollLeft() - this.sc;
    $(".menu-item").animate({ 'scrollLeft': this.pos }, 'slow');
  }

  goRight() {
    this.sc = $(".menu-item").width() - 60;
    this.pos = $(".menu-item").scrollLeft() + this.sc;
    $(".menu-item").animate({ 'scrollLeft': this.pos }, 'slow');
  }
}
