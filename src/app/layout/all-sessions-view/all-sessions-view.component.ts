import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-all-sessions-view',
  templateUrl: './all-sessions-view.component.html',
  styleUrls: ['./all-sessions-view.component.scss']
})

export class AllSessionsViewComponent implements OnInit {

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  todayDate = new Date();
  i = this.todayDate.getDay();
  dayName = this.days[this.i];
  nextWeekArr = this.nextweek(this.todayDate);
  displayWeek = [this.todayDate, ...this.nextWeekArr, ...this.nextweek(this.nextWeekArr[5])];

  weekDays = [];
  activeDay = 0;
  index = this.weekDays.findIndex(day => { return day === this.activeDay });
  getNext = false;
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
  }

  nextweek(initialDay: Date) {
    let nextWeek = [];
    for (let index = 1; index < 7; index++) {
      /* let today = new Date(); */
      nextWeek.push(new Date(initialDay.getFullYear(), initialDay.getMonth(), initialDay.getDate() + index));
    }
    console.log(nextWeek);
    return nextWeek;
  }

  returnDayNumber(date) {
    return date.getDate();
  }

  returnDayName(date) {
    return this.days[date.getDay()];
  }

  returnMonth(date) {
    return this.months[date.getMonth()];
  }

  changeDay(day) {
    console.log(day);
    this.activeDay = day;
    this.index = this.weekDays.findIndex(day => { return day === this.activeDay });
  }

  goLeft() {
    this.getNext = false;
    this.sc = $(".menu-item").width() - 60;
    this.pos = $(".menu-item").scrollLeft() - this.sc;
    $(".menu-item").animate({ 'scrollLeft': this.pos }, 'slow');
  }

  goRight() {
    if (this.getNext) {
      this.displayWeek.push(...this.nextweek(this.displayWeek[this.displayWeek.length - 1]));
    }
    this.sc = $(".menu-item").width() - 60;
    this.pos = $(".menu-item").scrollLeft() + this.sc;
    $(".menu-item").animate({ 'scrollLeft': this.pos }, 'slow');
    this.getNext = true;
  }
}
