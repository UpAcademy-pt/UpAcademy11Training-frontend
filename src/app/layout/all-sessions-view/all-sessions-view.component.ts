import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-all-sessions-view',
  templateUrl: './all-sessions-view.component.html',
  styleUrls: ['./all-sessions-view.component.scss']
})
export class AllSessionsViewComponent implements OnInit {
  weekDays = [11, 12, 13, 14, 15, 16, 17];
  weekDaysNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  activeDay = 0;
  index = this.weekDays.findIndex( day => {return day===this.activeDay} );

  lp = $(".left-pointer");;
  rp =  $(".right-pointer");;
  mItems = $(".menu-item");
  menu;
  sc;
  pos;
  links = $(".menu-item").children('a');

  constructor() { }

  ngOnInit() {
    
// var tItemsWidth = 0;
// mItems.find("a").each(function(){
//   tItemsWidth += $(this).outerWidth(true);
// });
this.links.on('click', () =>{
  this.links.removeClass('active');
  $(this).addClass('active');
});

this.mItems.scroll( () => {
  if( $(this).scrollLeft() == 0){
    $(".left-pointer").addClass("dis");
  }else{
    $(".left-pointer").removeClass("dis");
  }
});
  }

  changeDay(day) {
    console.log(day);
    this.activeDay = day;
    //this.index = this.weekDays.findIndex( day => {return day===this.activeDay} );
  }

  goLeft() {
    console.log('cliquei na esquerda');
  
    this.sc = $(".menu-item").width() - 60;
    this.pos = $(".menu-item").scrollLeft() - this.sc;
    $(".menu-item").animate({'scrollLeft': this.pos}, 'slow');
  }

  goRight(){
    console.log('cliquei na direita');
    console.log($(".menu-item"));
    
    this.sc = $(".menu-item").width() - 60;
    this.pos = $(".menu-item").scrollLeft() + this.sc;
    $(".menu-item").animate({'scrollLeft': this.pos}, 'slow');
  }
}


